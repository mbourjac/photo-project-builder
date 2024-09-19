import { createFileRoute } from '@tanstack/react-router';
import { Tags } from '../../../../../pages/Tags';

export const Route = createFileRoute(
  '/_layout/_protected/projects/_layout/tags',
)({
  component: Tags,
});
