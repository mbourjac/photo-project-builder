import type { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react';
import type {
  FieldValues,
  FormState,
  Path,
  UseFormGetFieldState,
  UseFormRegister,
} from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';

export type FieldProps<
  T extends FieldValues,
  U extends HTMLElement = HTMLInputElement,
> = {
  id: Path<T>;
  type?: HTMLInputTypeAttribute;
  label: string;
  isRequired?: boolean;
  config: {
    formState: FormState<T>;
    getFieldState: UseFormGetFieldState<T>;
    register: UseFormRegister<T>;
  };
  renderInput: (
    attributes: HTMLAttributes<U> & ReturnType<UseFormRegister<T>>,
  ) => ReactNode;
};

export const Field = <
  T extends FieldValues,
  U extends HTMLElement = HTMLInputElement,
>({
  id,
  type,
  label,
  isRequired,
  config: { formState, getFieldState, register },
  renderInput,
}: FieldProps<T, U>) => {
  const fieldState = getFieldState(id, formState);

  const errorMessage = fieldState.error?.message?.toString();
  const errorMessageId = errorMessage ? `${id}-error` : undefined;

  const inputAttributes = {
    id,
    type,
    'aria-required': isRequired,
    'aria-invalid': !!errorMessage,
    'aria-describedby': errorMessageId,
    ...register(id),
  };

  return (
    <>
      <Label label={label} htmlFor={id} isInputRequired={isRequired} />
      <div className="flex flex-col gap-1">
        {renderInput(
          inputAttributes as HTMLAttributes<U> & ReturnType<UseFormRegister<T>>,
        )}
        {errorMessage && (
          <ErrorMessage id={errorMessageId} message={errorMessage} />
        )}
      </div>
    </>
  );
};
