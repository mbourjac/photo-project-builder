import {
  type ReactNode,
  useRef,
  useState,
  useEffect,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import { DropdownMenuContext } from './DropdownMenuContext/DropdownMenuContext';
import type { DropdownMenuItemProps } from './DropdownMenuItem';

export type DropdownMenuProps = {
  itemsGroups?: DropdownMenuItemProps['item'][][];
  label?: string;
  children: ReactNode;
};

export const DropdownMenu = ({
  itemsGroups = [],
  label,
  children,
}: DropdownMenuProps) => {
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const isOpen = activeItemIndex !== null;

  const buttonId = 'account-dropdown-button';
  const menuId = 'account-dropdown-menu';

  const handleToggleMenu = () => {
    setActiveItemIndex((prevActiveItemIndex) =>
      prevActiveItemIndex !== null ? null : 0,
    );
  };

  const handleButtonKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveItemIndex(0);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveItemIndex(itemsGroups.flat().length - 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        setActiveItemIndex(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setActiveItemIndex(null);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <DropdownMenuContext.Provider
      value={{
        itemsGroups,
        activeItemIndex,
        setActiveItemIndex,
      }}
    >
      <div className="relative size-8" ref={dropdownMenuRef}>
        <button
          id={buttonId}
          aria-label="Menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={handleToggleMenu}
          onKeyDown={handleButtonKeyDown}
          className="size-full rounded-full bg-black text-sm text-white hover:opacity-75"
        >
          <span aria-hidden="true">{label}</span>
        </button>
        {isOpen && (
          <div
            id={menuId}
            role="menu"
            tabIndex={-1}
            aria-labelledby={buttonId}
            className="absolute right-0 mt-[7px] w-56 rounded-xl border bg-white p-[3px] text-sm"
          >
            {children}
          </div>
        )}
      </div>
    </DropdownMenuContext.Provider>
  );
};
