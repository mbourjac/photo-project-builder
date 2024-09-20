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
  isRequired?: boolean;
  autoComplete?: HTMLInputAutoCompleteAttribute;
};

export const Password = <T extends FieldValues>(props: PasswordProps<T>) => {
  const { id, label, isRequired, autoComplete } = props;
  const { attributes, errorMessage, errorMessageId } = useBaseField({
    ...props,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  return (
    <div className="flex w-full flex-col gap-1 text-sm">
      <label htmlFor={id}>
        <span className="font-semibold">{label}</span>
        {isRequired && (
          <>
            &nbsp;<span aria-hidden="true">*</span>
          </>
        )}
      </label>
      <div className="relative">
        <input
          {...attributes}
          aria-required={isRequired}
          autoComplete={autoComplete}
          aria-describedby={errorMessageId}
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
      {errorMessage && (
        <ErrorMessage id={errorMessageId} message={errorMessage} />
      )}
    </div>
  );
};
