import type { ReactNode } from '@tanstack/react-router';

type FieldWrapperProps = {
  children: ReactNode;
};

export const FieldWrapper = ({ children }: FieldWrapperProps) => {
  return <div className="flex w-full flex-col gap-1 text-sm">{children}</div>;
};
