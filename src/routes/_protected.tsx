import { createFileRoute, redirect } from '@tanstack/react-router';
import type { DefinedRoute } from '../router/router.types';

export const Route = createFileRoute('/_protected')({
  beforeLoad: ({ context: { authService }, location }) => {
    const { auth } = authService;

    if (!auth) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href as DefinedRoute,
        },
      });
    }

    return { auth };
  },
});
