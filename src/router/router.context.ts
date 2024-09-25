import type { QueryClient } from '@tanstack/react-query';
import type { AxiosInstance } from 'axios';
import { baseAPI } from '../lib/axios.instance';
import type { useAuthService } from '../services/auth/auth.service';
import type { useProjectsService } from '../services/projects/projects.service';
import type { useUsersService } from '../services/users/users.service';

export type RouterContext = {
  baseAPI: AxiosInstance;
  queryClient: QueryClient;
  authService: ReturnType<typeof useAuthService>;
  usersService: ReturnType<typeof useUsersService>;
  projectsService: ReturnType<typeof useProjectsService>;
};

export const routerContext: RouterContext = {
  baseAPI,
  queryClient: undefined!,
  authService: undefined!,
  usersService: undefined!,
  projectsService: undefined!,
};
