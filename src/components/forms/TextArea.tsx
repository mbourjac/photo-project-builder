import type { TextareaHTMLAttributes } from 'react';
import type { FieldValues } from 'react-hook-form';
import { Field, type FieldProps } from './Field';

export type TextAreaProps<T extends FieldValues> =
  TextareaHTMLAttributes<HTMLTextAreaElement> &
    Omit<FieldProps<T>, 'type' | 'renderInput'>;

export const TextArea = <T extends FieldValues>({
  id,
  label,
  isRequired,
  config,
  ...restProps
}: TextAreaProps<T>) => {
  return (
    <Field<T, HTMLTextAreaElement>
      id={id}
      label={label}
      isRequired={isRequired}
      config={config}
      renderInput={(attributes) => (
        <textarea
          {...attributes}
          {...restProps}
          aria-required={isRequired}
          className="w-full rounded-md border px-3 py-1"
        ></textarea>
      )}
    />
  );
};
