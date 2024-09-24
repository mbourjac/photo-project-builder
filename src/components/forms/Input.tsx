import type { InputHTMLAttributes } from 'react';
import type { FieldValues } from 'react-hook-form';
import { Field, type FieldProps } from './Field';

export type InputProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & Omit<FieldProps<T>, 'renderInput'>;

export const Input = <T extends FieldValues>({
  id,
  type,
  label,
  isRequired,
  config,
  ...restProps
}: InputProps<T>) => {
  return (
    <Field
      id={id}
      type={type}
      label={label}
      isRequired={isRequired}
      config={config}
      renderInput={(attributes) => (
        <input
          {...attributes}
          {...restProps}
          className="w-full rounded-md border px-3 py-1"
        />
      )}
    />
  );
};
