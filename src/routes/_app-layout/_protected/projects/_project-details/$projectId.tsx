import { createFileRoute } from '@tanstack/react-router';
import { ProjectDetails } from '../../../../../pages/ProjectDetails/ProjectDetails';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_project-details/$projectId',
)({
  component: ProjectDetails,
  beforeLoad: ({ context: { projectsService }, params: { projectId } }) => {
    return {
      getProjectQuery: projectsService.getProjectQueryOptions(projectId),
    };
  },
  loader: async ({ context: { queryClient, getProjectQuery } }) => {
    await queryClient.ensureQueryData(getProjectQuery);
  },
  pendingComponent: () => <div>Loading...</div>,
});
