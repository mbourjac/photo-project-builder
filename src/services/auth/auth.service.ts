import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../helpers/errors';
import { logInRequest, signUpRequest } from './auth.api';
import { authSchema } from './auth.schemas';
import { useAuthStore } from './auth.store';
import type { LogInUser, SignUpUser } from './auth.types';

export const useAuthService = () => {
  const queryClient = useQueryClient();
  const auth = useAuthStore.use.auth();
  const setAuth = useAuthStore.use.setAuth();

  const signUpMutation = useMutation({
    mutationKey: ['sign-up', 'user'],
    mutationFn: async (signUpData: SignUpUser) => {
      const auth = await signUpRequest(signUpData);
      return authSchema.parse(auth);
    },
    onSuccess: async (auth) => {
      setAuth(auth);
      await queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const logInMutation = useMutation({
    mutationKey: ['log-in', 'user'],
    mutationFn: async (logInData: LogInUser) => {
      const auth = await logInRequest(logInData);
      return authSchema.parse(auth);
    },
    onSuccess: async (auth) => {
      setAuth(auth);
      await queryClient.invalidateQueries();
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const logOut = () => {
    setAuth(null);
  };

  return { auth, signUpMutation, logInMutation, logOut };
};
