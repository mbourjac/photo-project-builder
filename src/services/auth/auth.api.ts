import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';
import type { LoginUser, SignUpUser } from './auth.types';

export const signUpRequest = async (signUpData: SignUpUser) => {
  const { data } = await baseAPI.post<AxiosResponse>(
    '/auth/sign-up',
    signUpData,
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
