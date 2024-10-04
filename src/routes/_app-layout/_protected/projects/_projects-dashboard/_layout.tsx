import { createFileRoute } from '@tanstack/react-router';
import { ProjectsSkeleton } from '../../../../../pages/Projects/ProjectsSkeleton';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_projects-dashboard/_layout',
)({
  beforeLoad: ({ context: { projectsService } }) => {
    return {
      getAllProjectsQuery: projectsService.getAllProjectsQueryOptions(),
    };
  },
  loader: async ({ context: { queryClient, getAllProjectsQuery } }) => {
    await queryClient.ensureQueryData(getAllProjectsQuery);
  },
  pendingComponent: ProjectsSkeleton,
});
