import { Input } from '../components/forms/Input';
import { Password } from '../components/forms/Password';
import { Button } from '../components/ui/Button';
import { useZodForm } from '../hooks/use-zod-form';
import { registerUserSchema } from '../services/auth/auth.schemas';
import type { RegisterUser } from '../services/auth/auth.types';

export const Register = () => {
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

  const onSubmit = (data: RegisterUser) => {
    console.log(data);
    resetForm();
  };

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
            <Input type="email" id="email" label="Email*" {...inputProps} />
            <Password id="password" label="Password*" {...inputProps} />
            <Password
              id="confirmPassword"
              label="Confirm password*"
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
