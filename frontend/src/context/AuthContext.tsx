import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'FARMER' | 'ADMIN' | 'EXPERT';
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('agro_token');
    const storedUser = localStorage.getItem('agro_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (newToken: string, newUser: User) => {
    localStorage.setItem('agro_token', newToken);
    localStorage.setItem('agro_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
    
    // Auto redirect based on role
    if (newUser.role === 'ADMIN') navigate('/admin');
    else if (newUser.role === 'EXPERT') navigate('/expert');
    else navigate('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('agro_token');
    localStorage.removeItem('agro_user');
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
