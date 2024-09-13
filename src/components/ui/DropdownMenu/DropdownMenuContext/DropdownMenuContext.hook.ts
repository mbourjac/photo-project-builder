import { useContext } from 'react';
import { DropdownMenuContext } from './DropdownMenuContext';

export const useDropdownMenuContext = () => {
  const dropdownMenuContext = useContext(DropdownMenuContext);

  if (!dropdownMenuContext) {
    throw new Error(
      'useDropdownMenuContext must be used within the scope of DropdownMenuContextProvider',
    );
  }

  return dropdownMenuContext;
};
