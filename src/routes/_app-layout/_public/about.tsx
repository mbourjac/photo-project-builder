import { createFileRoute } from '@tanstack/react-router';
import { About } from '../../../pages/About';

export const Route = createFileRoute('/_app-layout/_public/about')({
  component: About,
});
