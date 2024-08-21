import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';
import type { RegisterUser } from './auth.types';

export const registerRequest = async (registerUserPayload: RegisterUser) => {
  const { data } = await baseAPI.post<AxiosResponse>(
    '/auth/register',
    registerUserPayload,
  );
  return data;
};
