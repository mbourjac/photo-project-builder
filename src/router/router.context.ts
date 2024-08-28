import type { QueryClient } from '@tanstack/react-query';
import type { useAuthService } from '../services/auth/auth.service';
import type { useUsersService } from '../services/users/users.service';

export type RouterContext = {
  queryClient: QueryClient;
  authService: ReturnType<typeof useAuthService>;
  usersService: ReturnType<typeof useUsersService>;
};

export const routerContext: RouterContext = {
  queryClient: undefined!,
  authService: undefined!,
  usersService: undefined!,
};
