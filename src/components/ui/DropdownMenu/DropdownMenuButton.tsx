import type { ReactNode, HTMLAttributes } from 'react';
import { type IconProps, Icon } from '../../../components/ui/Icon';

type DropdownMenuButtonProps = HTMLAttributes<HTMLButtonElement> & {
  id: string;
  iconKind: IconProps['kind'];
  children: ReactNode;
};

export const DropdownMenuButton = ({
  id,
  iconKind,
  children,
  ...restProps
}: DropdownMenuButtonProps) => {
  return (
    <button
      {...restProps}
      id={id}
      className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
    >
      <Icon kind={iconKind} aria-hidden="true" className="size-5" />
      <span>{children}</span>
    </button>
  );
};
