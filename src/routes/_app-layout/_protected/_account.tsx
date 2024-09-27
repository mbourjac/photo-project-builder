import { createFileRoute } from '@tanstack/react-router';
import { MainLayout } from '../../../layouts/MainLayout';

export const Route = createFileRoute('/_app-layout/_protected/_account')({
  component: MainLayout,
});
