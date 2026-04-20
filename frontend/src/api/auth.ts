import api from './client';

export const authService = {
  signup: async (data: any) => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },
  login: async (data: any) => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },
  getProfile: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  }
};
