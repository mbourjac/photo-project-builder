import { type ReactNode, useState, type MouseEventHandler } from 'react';
import type { LinkProps } from '@tanstack/react-router';
import type { IconProps } from '../Icon';
import { DropdownMenuContext } from './DropdownMenuContext';

export type DropdownMenuProps = {
  items?: ({
    id: string;
    iconKind: IconProps['kind'];
    label: string;
    hasSeparator?: boolean;
  } & (
    | {
        type: 'link';
        to: LinkProps['to'];
      }
    | {
        type: 'button';
        onClick: MouseEventHandler<HTMLButtonElement>;
      }
  ))[];
  label?: string;
  children: ReactNode;
};

export const DropdownMenu = ({
  items = [],
  label,
  children,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <DropdownMenuContext.Provider value={{ items }}>
      <div className="relative size-8">
        <button
          onClick={handleToggleMenu}
          className="size-full rounded-full bg-black text-sm text-white hover:opacity-75"
        >
          {label}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-[7px] w-56 rounded-xl border bg-white p-[3px] text-sm">
            {children}
          </div>
        )}
      </div>
    </DropdownMenuContext.Provider>
  );
};
