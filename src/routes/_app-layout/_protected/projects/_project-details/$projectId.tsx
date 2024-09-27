import { createFileRoute } from '@tanstack/react-router';
import { ProjectDetails } from '../../../../../pages/ProjectDetails';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_project-details/$projectId',
)({
  component: ProjectDetails,
});
