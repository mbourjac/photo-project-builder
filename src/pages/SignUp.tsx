import { useState, useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';
import { AuthForm } from '../components/app/AuthForm';
import { Input } from '../components/forms/Input';
import { Password } from '../components/forms/Password';
import { Button } from '../components/ui/Button';
import { useZodForm } from '../hooks/use-zod-form';
import { signUpUserSchema } from '../services/auth/auth.schemas';
import { useAuthService } from '../services/auth/auth.service';
import type { SignUpUser } from '../services/auth/auth.types';

export const SignUp = () => {
  const router = useRouter();
  const { signUpMutation } = useAuthService();
  const { handleSubmit, inputProps, trigger } = useZodForm(signUpUserSchema, {
    defaultValues: {
      email: '',
      firstName: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [currentStep, setCurrentStep] = useState<'information' | 'password'>(
    'information',
  );

  const handleNextStep = async () => {
    const output = await trigger(['email', 'firstName'], {
      shouldFocus: true,
    });

    if (!output) return;

    setCurrentStep('password');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      void handleNextStep();
    }
  };

  const onSubmit = async (data: SignUpUser) => {
    signUpMutation.mutate(data);
    await router.invalidate();
  };

  useEffect(() => {
    if (signUpMutation.isError) {
      setCurrentStep('information');
      signUpMutation.reset();
    }
  }, [signUpMutation]);

  return (
    <AuthForm
      heading="Welcome"
      subheading="Sign up to get started."
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-12">
        {currentStep === 'information' && (
          <>
            <div className="flex flex-col gap-8">
              <Input
                type="email"
                id="email"
                label="Email"
                autoComplete="email"
                isRequired
                onKeyDown={handleKeyDown}
                {...inputProps}
              />
              <Input
                id="firstName"
                label="First name"
                autoComplete="given-name"
                isRequired
                onKeyDown={handleKeyDown}
                {...inputProps}
              />
            </div>
            <Button
              type="button"
              onClick={() => void handleNextStep()}
              className="mx-auto"
            >
              Continue
            </Button>
          </>
        )}
        {currentStep === 'password' && (
          <>
            <div className="flex flex-col gap-8">
              <Password
                id="password"
                label="Password"
                autoComplete="new-password"
                isRequired
                {...inputProps}
              />
              <Password
                id="confirmPassword"
                label="Confirm password"
                autoComplete="new-password"
                isRequired
                {...inputProps}
              />
            </div>
            <Button
              type="submit"
              disabled={signUpMutation.isPending}
              className="mx-auto"
            >
              Sign up
            </Button>
          </>
        )}
      </div>
    </AuthForm>
  );
};
