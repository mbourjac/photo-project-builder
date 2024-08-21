import { useEffect } from 'react';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { Input } from '../components/forms/Input';
import { Password } from '../components/forms/Password';
import { Button } from '../components/ui/Button';
import { useZodForm } from '../hooks/use-zod-form';
import { registerUserSchema } from '../services/auth/auth.schemas';
import { useAuthService } from '../services/auth/auth.service';
import type { RegisterUser } from '../services/auth/auth.types';

export const Register = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const { auth, registerMutation } = useAuthService();
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset: resetForm,
    inputProps,
  } = useZodForm(registerUserSchema, {
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterUser) => {
    registerMutation.mutate(data);
    await router.invalidate();
    resetForm();
  };

  useEffect(() => {
    if (auth) {
      void navigate({ to: '/dashboard' });
    }
  }, [auth, navigate]);

  return (
    <div className="flex grow items-center justify-center overflow-auto">
      <div className="flex w-[min(42rem,100%)] flex-col gap-12 rounded-[48px] border px-12 py-16">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsam
          quisquam ullam aspernatur dolore sit repellendus ratione.
        </p>
        <form
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-12">
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
          </div>
          <Button isDisabled={isSubmitting} className="mx-auto">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};
