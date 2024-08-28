import { useQueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { useAuthService } from '../services/auth/auth.service';
import { useUsersService } from '../services/users/users.service';
import { router } from './router.instance';

export const Router = () => {
  const queryClient = useQueryClient();
  const authService = useAuthService();
  const usersService = useUsersService();

  return (
    <RouterProvider
      router={router}
      context={{ queryClient, authService, usersService }}
    />
  );
};
