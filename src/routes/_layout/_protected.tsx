import { createFileRoute, redirect } from '@tanstack/react-router';
import type { DefinedRoute } from '../../router/router.types';

export const Route = createFileRoute('/_layout/_protected')({
  beforeLoad: ({ context: { baseAPI, authService }, location }) => {
    const { auth } = authService;

    if (!auth) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw redirect({
        to: '/log-in',
        search: {
          redirect: location.href as DefinedRoute,
        },
      });
    }

    baseAPI.defaults.headers.Authorization = `Bearer ${auth.accessToken}`;

    return { auth };
  },
});
