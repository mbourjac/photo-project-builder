import { useRouter } from '@tanstack/react-router';
import { AuthForm } from '../components/app/AuthForm';
import { Input } from '../components/forms/Input';
import { Password } from '../components/forms/Password';
import { useZodForm } from '../hooks/use-zod-form';
import { logInUserSchema } from '../services/auth/auth.schemas';
import { useAuthService } from '../services/auth/auth.service';
import type { LogInUser } from '../services/auth/auth.types';

export const LogIn = () => {
  const router = useRouter();
  const { logInMutation } = useAuthService();
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset: resetForm,
    inputProps,
  } = useZodForm(logInUserSchema, {
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LogInUser) => {
    logInMutation.mutate(data);
    await router.invalidate();
    resetForm();
  };

  return (
    <AuthForm
      heading="Welcome back"
      subheading="Log in to your account to continue."
      submitLabel="Log in"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    >
      <Input
        type="email"
        id="email"
        label="Email*"
        autoComplete="email"
        {...inputProps}
      />
      <Password
        id="password"
        label="Password*"
        autoComplete="current-password"
        {...inputProps}
      />
    </AuthForm>
  );
};
