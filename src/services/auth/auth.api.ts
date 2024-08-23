import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';
import type { LoginUser, RegisterUser } from './auth.types';

export const registerRequest = async (registerUserPayload: RegisterUser) => {
  const { data } = await baseAPI.post<AxiosResponse>(
    '/auth/register',
    registerUserPayload,
  );
  return data;
};

export const loginRequest = async (loginUserPayload: LoginUser) => {
  const { data } = await baseAPI.post<AxiosResponse>(
    '/auth/login',
    loginUserPayload,
  );
  return data;
};
