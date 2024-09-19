import { createFileRoute } from '@tanstack/react-router';
import { Timeline } from '../../../../../pages/Timeline';

export const Route = createFileRoute(
  '/_layout/_protected/projects/_layout/timeline',
)({
  component: Timeline,
});
