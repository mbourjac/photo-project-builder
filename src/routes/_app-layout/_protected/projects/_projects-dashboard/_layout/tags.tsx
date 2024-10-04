import { createFileRoute } from '@tanstack/react-router';
import { Tags } from '../../../../../../pages/Tags';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_projects-dashboard/_layout/tags',
)({
  component: Tags,
});
