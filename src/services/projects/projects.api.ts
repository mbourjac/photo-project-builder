import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';

export const getAllProjectsRequest = async () => {
  const { data } = await baseAPI.get<AxiosResponse>(`/projects`);
  console.log(data);

  return data;
};
