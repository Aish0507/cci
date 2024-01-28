/* eslint-disable import/no-unused-modules */
import apiClient from '@/repositories/apiClient';

export const getUser = async () => {
  return await apiClient({
    method: 'GET',
    url: `/user`,
  });
};
