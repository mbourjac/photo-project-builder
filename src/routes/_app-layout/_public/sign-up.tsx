import { createFileRoute } from '@tanstack/react-router';
import { SignUp } from '../../../pages/SignUp';

export const Route = createFileRoute('/_app-layout/_public/sign-up')({
  component: SignUp,
});
