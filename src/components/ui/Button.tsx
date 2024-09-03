import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/tailwind.utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...restProps }: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={cn(
        'rounded-full bg-black px-6 py-1.5 text-white transition-colors duration-150 disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
};
