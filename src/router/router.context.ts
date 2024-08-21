import type { useAuthService } from '../services/auth/auth.service';

export type RouterContext = {
  authService: ReturnType<typeof useAuthService>;
};

export const routerContext: RouterContext = {
  authService: undefined!,
};
