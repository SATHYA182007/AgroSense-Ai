import api from './client';

export const farmerService = {
  getStats: async () => {
    const response = await api.get('/farmer/stats');
    return response.data;
  },
  getRiskReport: async (farmId: string) => {
    const response = await api.get(`/farmer/risk/${farmId}`);
    return response.data;
  },
  getAdvisories: async () => {
    const response = await api.get('/farmer/advisories');
    return response.data;
  }
};
