import type { MouseEventHandler, KeyboardEvent } from 'react';
import type { LinkProps } from '@tanstack/react-router';
import type { IconProps } from '../Icon';
import { DropdownMenuButton } from './DropdownMenuButton';
import { useDropdownMenuContext } from './DropdownMenuContext/DropdownMenuContext.hook';
import { DropdownMenuLink } from './DropdownMenuLink';

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
  const { itemsGroups, activeItemIndex, setActiveItemIndex } =
    useDropdownMenuContext();
  const itemsCount = itemsGroups.flat().length;

  const handleItemKeyDown = (event: KeyboardEvent<HTMLButtonElement | 'a'>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveItemIndex((prevIndex) =>
          prevIndex !== null ? (prevIndex + 1) % itemsCount : null,
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveItemIndex((prevIndex) =>
          prevIndex !== null ? (prevIndex - 1 + itemsCount) % itemsCount : null,
        );
        break;
    }
  };

  const commonProps = {
    isActive: activeItemIndex === index,
    handleKeyDown: handleItemKeyDown,
  };

  return item.type === 'link' ?
      <DropdownMenuLink {...commonProps} {...item}>
        {item.label}
      </DropdownMenuLink>
    : <DropdownMenuButton {...commonProps} {...item}>
        {item.label}
      </DropdownMenuButton>;
};
