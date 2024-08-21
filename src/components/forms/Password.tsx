import { useState, type HTMLInputAutoCompleteAttribute } from 'react';
import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';
import { Icon } from '../ui/Icon';
import { ErrorMessage } from './ErrorMessage';

export type PasswordProps<T extends FieldValues> = Omit<
  BaseFieldProps<T>,
  'type'
> & {
  label: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
};

export const Password = <T extends FieldValues>(props: PasswordProps<T>) => {
  const { id, label, autoComplete } = props;
  const { attributes, errorMessage } = useBaseField({
    ...props,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          {...attributes}
          autoComplete={autoComplete}
          className="w-full rounded-full border px-3 py-1"
          type={isPasswordVisible ? 'text' : 'password'}
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute right-0 top-0 flex aspect-square h-full items-center justify-center rounded-full px-3"
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
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};
