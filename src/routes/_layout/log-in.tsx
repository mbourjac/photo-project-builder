import { createFileRoute } from '@tanstack/react-router';
import { LogIn } from '../../pages/LogIn';

export const Route = createFileRoute('/_layout/log-in')({
  component: LogIn,
});
