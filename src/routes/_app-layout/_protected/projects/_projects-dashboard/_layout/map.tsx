import { createFileRoute } from '@tanstack/react-router';
import { Map } from '../../../../../../pages/Map';

export const Route = createFileRoute(
  '/_app-layout/_protected/projects/_projects-dashboard/_layout/map',
)({
  component: Map,
});
