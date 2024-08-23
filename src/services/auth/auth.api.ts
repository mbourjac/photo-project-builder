import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';
import type { LogInUser, SignUpUser } from './auth.types';

export const signUpRequest = async (signUpData: SignUpUser) => {
  const { data } = await baseAPI.post<AxiosResponse>(
    '/auth/sign-up',
    signUpData,
  );
  return data;
};

export const logInRequest = async (logInData: LogInUser) => {
  const { data } = await baseAPI.post<AxiosResponse>('/auth/log-in', logInData);
  return data;
};
