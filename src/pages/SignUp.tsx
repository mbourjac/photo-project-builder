import { useRouter } from '@tanstack/react-router';
import { AuthForm } from '../components/app/AuthForm';
import { Input } from '../components/forms/Input';
import { Password } from '../components/forms/Password';
import { useZodForm } from '../hooks/use-zod-form';
import { signUpUserSchema } from '../services/auth/auth.schemas';
import { useAuthService } from '../services/auth/auth.service';
import type { SignUpUser } from '../services/auth/auth.types';

export const SignUp = () => {
  const router = useRouter();
  const { signUpMutation } = useAuthService();
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset: resetForm,
    inputProps,
  } = useZodForm(signUpUserSchema, {
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignUpUser) => {
    signUpMutation.mutate(data);
    await router.invalidate();
    resetForm();
  };

  return (
    <AuthForm
      heading="Welcome"
      subheading="Sign up to get started."
      submitLabel="Sign up"
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
        autoComplete="new-password"
        {...inputProps}
      />
      <Password
        id="confirmPassword"
        label="Confirm password*"
        autoComplete="new-password"
        {...inputProps}
      />
    </AuthForm>
  );
};
