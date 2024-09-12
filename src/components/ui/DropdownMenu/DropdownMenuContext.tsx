import { createContext } from 'react';
import type { DropdownMenuProps } from './DropdownMenu';

type DropdownMenuContextProps = {
  items: NonNullable<DropdownMenuProps['items']>;
};

export const DropdownMenuContext =
  createContext<DropdownMenuContextProps | null>(null);
