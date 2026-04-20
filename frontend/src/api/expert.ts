import api from './client';

export const expertService = {
  publishAdvisory: async (data: any) => {
    const response = await api.post('/expert/advisory', data);
    return response.data;
  },
  getMyAdvisories: async () => {
    const response = await api.get('/expert/advisories');
    return response.data;
  }
};
