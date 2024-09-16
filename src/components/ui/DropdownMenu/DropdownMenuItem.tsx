import type { MouseEventHandler } from 'react';
import { Link, type LinkProps } from '@tanstack/react-router';
import { cn } from '../../../lib/tailwind.utils';
import { Icon, type IconProps } from '../Icon';
import { useDropdownMenuContext } from './DropdownMenuContext/DropdownMenuContext.hook';

export type DropdownMenuItemProps = {
  item: {
    id: string;
    iconKind: IconProps['kind'];
    label: string;
  } & (
    | {
        type: 'link';
        to: LinkProps['to'];
      }
    | {
        type: 'button';
        onClick: MouseEventHandler<HTMLButtonElement>;
      }
  );
  index: number;
};

export const DropdownMenuItem = ({ item, index }: DropdownMenuItemProps) => {
  const { activeItemIndex, setActiveItemIndex } = useDropdownMenuContext();
  const { type, iconKind, label } = item;
  const isActive = activeItemIndex === index;

  const handleMouseEnter = () => {
    setActiveItemIndex(index);
  };

  const attributes = {
    role: 'menuitem',
    tabIndex: -1,
    onMouseEnter: handleMouseEnter,
    className: cn(
      'flex w-full items-center gap-2 rounded-lg p-2',
      isActive && 'bg-zinc-100',
    ),
  };

  const content = (
    <>
      <Icon kind={iconKind} aria-hidden="true" className="size-5" />
      <span>{label}</span>
    </>
  );

  return type === 'link' ?
      <Link {...attributes} to={item.to}>
        {content}
      </Link>
    : <button {...attributes} onClick={item.onClick}>
        {content}
      </button>;
};
