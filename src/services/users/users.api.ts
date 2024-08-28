import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';

export const getUserRequest = async (userId: string) => {
  const { data } = await baseAPI.get<AxiosResponse>(`/users/${userId}`);
  return data;
};
