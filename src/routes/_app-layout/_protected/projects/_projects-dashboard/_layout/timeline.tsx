import { createFileRoute } from '@tanstack/react-router';
import { Timeline } from '../../../../../../pages/Timeline';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_projects-dashboard/_layout/timeline',
)({
  component: Timeline,
});
