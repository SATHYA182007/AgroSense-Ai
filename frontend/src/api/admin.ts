import api from './client';

export const adminService = {
  getSystemStats: async () => {
    const response = await api.get('/admin/stats');
    return response.data;
  },
  getAllUsers: async () => {
    const response = await api.get('/admin/users');
    return response.data;
  }
};
