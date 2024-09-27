import { createFileRoute } from '@tanstack/react-router';
import { Timeline } from '../../../../../pages/Timeline';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_projects-layout/timeline',
)({
  component: Timeline,
});
