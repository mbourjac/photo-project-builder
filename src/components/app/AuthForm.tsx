import { useEffect, type ReactNode } from 'react';
import { useNavigate } from '@tanstack/react-router';
import type {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { useAuthService } from '../../services/auth/auth.service';

type AuthFormProps<T extends FieldValues> = {
  heading: string;
  subheading: string;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
};

export const AuthForm = <T extends FieldValues>({
  heading,
  subheading,
  handleSubmit,
  onSubmit,
  children,
}: AuthFormProps<T>) => {
  const navigate = useNavigate();
  const { auth } = useAuthService();

  useEffect(() => {
    if (auth) {
      void navigate({ to: '/projects' });
    }
  }, [auth, navigate]);

  return (
    <div className="flex w-[min(32rem,100%)] flex-col justify-center gap-12 rounded-3xl border bg-white px-12 py-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{heading}</h1>
        <p>{subheading}</p>
      </div>
      <form
        onSubmit={(event) => void handleSubmit(onSubmit)(event)}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-12">{children}</div>
      </form>
    </div>
  );
};
