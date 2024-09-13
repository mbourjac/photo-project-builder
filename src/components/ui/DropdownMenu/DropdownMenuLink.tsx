import { type ReactNode, useRef, useEffect, type KeyboardEvent } from 'react';
import { Link, type LinkProps } from '@tanstack/react-router';
import { type IconProps, Icon } from '../../../components/ui/Icon';

type DropdownMenuLinkProps = LinkProps & {
  id: string;
  iconKind: IconProps['kind'];
  isActive: boolean;
  handleKeyDown: (event: KeyboardEvent<'a'>) => void;
  children: ReactNode;
};

export const DropdownMenuLink = ({
  id,
  iconKind,
  isActive,
  handleKeyDown,
  children,
  ...restProps
}: DropdownMenuLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const link = linkRef.current;

    if (!link) {
      throw new Error('linkRef is not assigned');
    }

    link.focus();
  }, [isActive]);

  return (
    <Link
      {...restProps}
      ref={linkRef}
      id={id}
      role="menuitem"
      onKeyDown={handleKeyDown}
      className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
    >
      <Icon kind={iconKind} aria-hidden="true" className="size-5" />
      <span>{children}</span>
    </Link>
  );
};
