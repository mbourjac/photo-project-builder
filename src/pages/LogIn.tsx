import { useRouter } from '@tanstack/react-router';
import { AuthForm } from '../components/app/AuthForm';
import { Input } from '../components/forms/Input';
import { Password } from '../components/forms/Password';
import { Button } from '../components/ui/Button';
import { useZodForm } from '../hooks/use-zod-form';
import { logInUserSchema } from '../services/auth/auth.schemas';
import { useAuthService } from '../services/auth/auth.service';
import type { LogInUser } from '../services/auth/auth.types';

export const LogIn = () => {
  const router = useRouter();
  const { logInMutation } = useAuthService();
  const { handleSubmit, configInput } = useZodForm(logInUserSchema, {
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LogInUser) => {
    logInMutation.mutate(data);
    await router.invalidate();
  };

  return (
    <AuthForm
      heading="Welcome back"
      subheading="Log in to your account to continue."
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-8">
        <Input
          type="email"
          id="email"
          label="Email"
          autoComplete="email"
          isRequired
          config={configInput}
        />
        <Password
          id="password"
          label="Password"
          autoComplete="current-password"
          isRequired
          config={configInput}
        />
      </div>
      <Button disabled={logInMutation.isPending} className="mx-auto">
        Log in
      </Button>
    </AuthForm>
  );
};
