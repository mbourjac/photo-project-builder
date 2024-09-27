import { createFileRoute } from '@tanstack/react-router';
import { LogIn } from '../../../pages/LogIn';

export const Route = createFileRoute('/_app-layout/_public/log-in')({
  component: LogIn,
});
