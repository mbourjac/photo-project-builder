import { createFileRoute } from '@tanstack/react-router';
import { Features } from '../../pages/Features';

export const Route = createFileRoute('/_layout/features')({
  component: Features,
});
