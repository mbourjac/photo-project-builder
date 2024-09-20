import type {
  HTMLInputAutoCompleteAttribute,
  KeyboardEventHandler,
} from 'react';
import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';
import { ErrorMessage } from './ErrorMessage';

export type InputProps<T extends FieldValues> = BaseFieldProps<T> & {
  label: string;
  isRequired?: boolean;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { attributes, errorMessage } = useBaseField(props);
  const { id, label, isRequired, autoComplete, onKeyDown } = props;

  const messageErrorId = errorMessage ? `${id}-error` : undefined;

  return (
    <div className="flex w-full flex-col gap-1 text-sm">
      <label htmlFor={id} className="flex items-baseline">
        <span className="font-semibold">{label}</span>
        {isRequired && (
          <>
            &nbsp;<span aria-hidden="true">*</span>
          </>
        )}
      </label>
      <div>
        <input
          {...attributes}
          aria-required={isRequired}
          autoComplete={autoComplete}
          onKeyDown={onKeyDown}
          aria-describedby={messageErrorId}
          className="w-full rounded-md border px-3 py-1"
        />
      </div>
      {errorMessage && (
        <ErrorMessage id={messageErrorId} message={errorMessage} />
      )}
    </div>
  );
};
