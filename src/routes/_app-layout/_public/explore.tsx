import { createFileRoute } from '@tanstack/react-router';
import { Explore } from '../../../pages/Explore';

export const Route = createFileRoute('/_app-layout/_public/explore')({
  component: Explore,
});
