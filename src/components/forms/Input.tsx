import type {
  HTMLInputAutoCompleteAttribute,
  KeyboardEventHandler,
} from 'react';
import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';
import { ErrorMessage } from './ErrorMessage';

export type InputProps<T extends FieldValues> = BaseFieldProps<T> & {
  label: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { attributes, errorMessage } = useBaseField(props);
  const { id, label, autoComplete, onKeyDown } = props;

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="flex items-baseline justify-between">
        {label}
      </label>
      <div>
        <input
          {...attributes}
          autoComplete={autoComplete}
          onKeyDown={onKeyDown}
          className="w-full rounded-xl border px-3 py-1"
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};
