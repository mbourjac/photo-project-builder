import { useState, type InputHTMLAttributes } from 'react';
import type { FieldValues } from 'react-hook-form';
import { Icon } from '../ui/Icon';
import { Field, type FieldProps } from './Field';

export type PasswordProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> &
    Omit<FieldProps<T>, 'type' | 'renderInput'>;

export const Password = <T extends FieldValues>({
  id,
  label,
  isRequired,
  config,
  ...restProps
}: PasswordProps<T>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  return (
    <Field
      id={id}
      label={label}
      isRequired={isRequired}
      config={config}
      renderInput={(attributes) => (
        <div className="relative">
          <input
            {...attributes}
            {...restProps}
            className="w-full rounded-md border px-3 py-1"
            type={isPasswordVisible ? 'text' : 'password'}
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute right-0 top-0 flex aspect-square h-full items-center justify-center rounded-md px-3"
          >
            <Icon
              kind={isPasswordVisible ? 'hidden' : 'visible'}
              screenReaderLabel={`${
                isPasswordVisible ? 'Hide' : 'Show'
              } password`}
              className="size-5"
            />
          </button>
        </div>
      )}
    />
  );
};
