import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type UseFormProps } from 'react-hook-form';
import type { z } from 'zod';

export const useZodForm = <T extends z.ZodTypeAny>(
  schema: T,
  formProps?: UseFormProps<z.infer<T>>,
) => {
  const form = useForm<z.infer<T>>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    ...formProps,
  });

  const inputProps = {
    register: form.register,
    getFieldState: form.getFieldState,
    formState: form.formState,
  };

  return { ...form, inputProps };
};
