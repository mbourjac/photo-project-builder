import { createFileRoute } from '@tanstack/react-router';
import { Features } from '../../../pages/Features';

export const Route = createFileRoute('/_app-layout/_public/features')({
  component: Features,
});
