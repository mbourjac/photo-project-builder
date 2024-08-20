import type { ReactNode } from 'react';
import { cn } from '../../lib/tailwind.utils';

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  isDisabled?: boolean;
  children: ReactNode;
};

export const Button = ({
  onClick,
  className,
  isDisabled,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'hover:text-primary disabled:text-primary w-fit rounded-full bg-black px-6 py-2 text-white transition-colors duration-150 disabled:opacity-50',
        className,
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
