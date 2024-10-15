import { createContext } from 'react';

type ModalContextProps = {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  handleCloseModal: () => void;
};

export const ModalContext = createContext<ModalContextProps | null>(null);
