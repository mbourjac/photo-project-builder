import type { HTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from '@tanstack/react-router';
import { Icon, type IconProps } from '../Icon';

type DropdownMenuActionProps = {
  children: ReactNode;
  iconKind: IconProps['kind'];
} & (
  | {
      linkProps?: LinkProps;
      buttonProps?: never;
    }
  | {
      linkProps?: never;
      buttonProps?: HTMLAttributes<HTMLButtonElement>;
    }
);

export const DropdownMenuAction = ({
  children,
  iconKind,
  linkProps,
  buttonProps,
}: DropdownMenuActionProps) => {
  return linkProps ?
      <Link
        {...linkProps}
        className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100"
      >
        <Icon kind={iconKind} aria-hidden="true" className="size-5" />
        <span>{children}</span>
      </Link>
    : <button
        {...buttonProps}
        className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100"
      >
        <Icon kind={iconKind} aria-hidden="true" className="size-5" />
        <span>{children}t</span>
      </button>;
};
