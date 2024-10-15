import type { ReactNode } from 'react';
import { ModalContext } from './ModalContext/ModalContext';

type ModalProps = {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  handleCloseModal: () => void;
  children: ReactNode;
};

export const Modal = ({
  isOpen,
  setIsOpen,
  handleCloseModal,
  children,
}: ModalProps) => {
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
