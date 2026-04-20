import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import FarmerDash from './pages/FarmerDash';
import ClimateRisk from './pages/ClimateRisk';
import DiseaseDetection from './pages/DiseaseDetection';
import MarketIntel from './pages/MarketIntel';
import RegionalInsights from './pages/RegionalInsights';
import FarmChat from './pages/FarmChat';
import Tasks from './pages/Tasks';
import KnowledgeCenter from './pages/KnowledgeCenter';
import ExpertDash from './pages/ExpertDash';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AdminDash from './pages/AdminDash';
import DashboardLayout from './layouts/DashboardLayout';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />

          {/* Farmer Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout><FarmerDash /></DashboardLayout>} />
          <Route path="/dashboard/climate" element={<DashboardLayout><ClimateRisk /></DashboardLayout>} />
          <Route path="/dashboard/crops" element={<DashboardLayout><RegionalInsights /></DashboardLayout>} />
          <Route path="/dashboard/disease" element={<DashboardLayout><DiseaseDetection /></DashboardLayout>} />
          <Route path="/dashboard/irrigation" element={<DashboardLayout><RegionalInsights /></DashboardLayout>} />
          <Route path="/dashboard/market" element={<DashboardLayout><MarketIntel /></DashboardLayout>} />
          <Route path="/dashboard/economics" element={<DashboardLayout><MarketIntel /></DashboardLayout>} />
          <Route path="/dashboard/chat" element={<DashboardLayout><FarmChat /></DashboardLayout>} />
          <Route path="/dashboard/tasks" element={<DashboardLayout><Tasks /></DashboardLayout>} />
          <Route path="/dashboard/knowledge" element={<DashboardLayout><KnowledgeCenter /></DashboardLayout>} />
          <Route path="/dashboard/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
          <Route path="/dashboard/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />

          {/* Expert Dashboard Routes */}
          <Route path="/expert" element={<DashboardLayout><ExpertDash /></DashboardLayout>} />
          <Route path="/expert/risk" element={<DashboardLayout><RegionalInsights /></DashboardLayout>} />
          <Route path="/expert/issues" element={<DashboardLayout><FarmChat /></DashboardLayout>} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<DashboardLayout><AdminDash /></DashboardLayout>} />
          <Route path="/admin/trends" element={<DashboardLayout><MarketIntel /></DashboardLayout>} />
          <Route path="/admin/users" element={<DashboardLayout><AdminDash /></DashboardLayout>} />
          <Route path="/admin/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
