import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '../../../pages/Dashboard';

export const Route = createFileRoute('/_layout/_protected/dashboard')({
  component: Dashboard,
  loader: async ({
    context: {
      queryClient,
      auth: { id },
      usersService,
    },
  }) => ({
    user: await queryClient.ensureQueryData(
      usersService.getUserQueryOptions(id),
    ),
  }),
});
