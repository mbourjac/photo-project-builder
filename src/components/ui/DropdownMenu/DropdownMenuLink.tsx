import type { ReactNode } from 'react';
import { Link, type LinkProps } from '@tanstack/react-router';
import { type IconProps, Icon } from '../../../components/ui/Icon';

type DropdownMenuLinkProps = LinkProps & {
  id: string;
  iconKind: IconProps['kind'];
  children: ReactNode;
};

export const DropdownMenuLink = ({
  id,
  iconKind,
  children,
  ...restProps
}: DropdownMenuLinkProps) => {
  return (
    <Link
      {...restProps}
      id={id}
      className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
    >
      <Icon kind={iconKind} aria-hidden="true" className="size-5" />
      <span>{children}</span>
    </Link>
  );
};
