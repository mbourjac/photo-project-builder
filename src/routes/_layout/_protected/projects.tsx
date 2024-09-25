import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/_protected/projects')({
  beforeLoad: ({ context: { projectsService } }) => {
    return {
      getAllProjectsQuery: projectsService.getAllProjectsQueryOptions(),
    };
  },
  loader: async ({ context: { queryClient, getAllProjectsQuery } }) => {
    await queryClient.ensureQueryData(getAllProjectsQuery);
  },
  pendingComponent: () => <div>Loading...</div>,
});
