import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { DropdownMenuProps } from '../DropdownMenu';

type DropdownMenuContextProps = {
  itemsGroups: NonNullable<DropdownMenuProps['itemsGroups']>;
  activeItemIndex: number | null;
  setActiveItemIndex: Dispatch<SetStateAction<number | null>>;
};

export const DropdownMenuContext =
  createContext<DropdownMenuContextProps | null>(null);
