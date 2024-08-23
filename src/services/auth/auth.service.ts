import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginRequest, registerRequest } from './auth.api';
import { authSchema } from './auth.schemas';
import { useAuthStore } from './auth.store';
import type { LoginUser, RegisterUser } from './auth.types';

export const useAuthService = () => {
  const queryClient = useQueryClient();
  const auth = useAuthStore.use.auth();
  const setAuth = useAuthStore.use.setAuth();

  const registerMutation = useMutation({
    mutationKey: ['register', 'user'],
    mutationFn: async (registerUserData: RegisterUser) => {
      const auth = await registerRequest(registerUserData);
      return authSchema.parse(auth);
    },
    onSuccess: async (auth) => {
      setAuth(auth);
      await queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const loginMutation = useMutation({
    mutationKey: ['login', 'user'],
    mutationFn: async (loginUserData: LoginUser) => {
      const auth = await loginRequest(loginUserData);
      return authSchema.parse(auth);
    },
    onSuccess: async (auth) => {
      setAuth(auth);
      await queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const logout = () => {
    setAuth(null);
  };

  return { auth, registerMutation, loginMutation, logout };
};
