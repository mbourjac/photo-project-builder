import type { FieldValues } from 'react-hook-form';
import { type BaseFieldProps, useBaseField } from '../../hooks/use-base-field';
import { ErrorMessage } from './ErrorMessage';

export type InputProps<T extends FieldValues> = BaseFieldProps<T> & {
  label: string;
};

export const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { attributes, errorMessage } = useBaseField(props);
  const { id, label } = props;

  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="flex items-baseline justify-between">
        {label}
      </label>
      <div>
        <input
          {...attributes}
          className="w-full rounded-full border px-3 py-1"
        />
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};
