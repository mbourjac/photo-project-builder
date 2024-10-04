import { createFileRoute } from '@tanstack/react-router';
import { ProjectsLayout } from '../../../../layouts/ProjectsLayout/ProjectsLayout';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_projects-dashboard',
)({
  component: ProjectsLayout,
});
