import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '../../../../../../pages/Projects/Projects';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_projects-dashboard/_layout/',
)({
  component: Projects,
});
