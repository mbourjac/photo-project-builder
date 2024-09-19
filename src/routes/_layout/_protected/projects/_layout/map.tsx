import { createFileRoute } from '@tanstack/react-router';
import { Map } from '../../../../../pages/Map';

export const Route = createFileRoute(
  '/_layout/_protected/projects/_layout/map',
)({
  component: Map,
});
