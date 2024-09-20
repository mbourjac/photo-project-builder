import type {
  HTMLInputAutoCompleteAttribute,
  KeyboardEventHandler,
} from 'react';
import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';

export type InputProps<T extends FieldValues> = BaseFieldProps<T> & {
  label: string;
  isRequired?: boolean;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { attributes, errorMessage, errorMessageId } = useBaseField(props);
  const { label, isRequired, autoComplete, onKeyDown } = props;

  return (
    <div className="flex w-full flex-col gap-1 text-sm">
      <Label
        label={label}
        htmlFor={errorMessageId}
        isInputRequired={isRequired}
      />
      <div>
        <input
          {...attributes}
          aria-required={isRequired}
          autoComplete={autoComplete}
          onKeyDown={onKeyDown}
          aria-describedby={errorMessageId}
          className="w-full rounded-md border px-3 py-1"
        />
      </div>
      {errorMessage && (
        <ErrorMessage id={errorMessageId} message={errorMessage} />
      )}
    </div>
  );
};
