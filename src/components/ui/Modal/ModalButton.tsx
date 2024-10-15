import { type ReactNode, useRef, useEffect } from 'react';
import { useModalContext } from './ModalContext/ModalContext.hook';

export type ModalButtonProps = {
  className?: string;
  children: ReactNode;
};

export const ModalButton = ({ className, children }: ModalButtonProps) => {
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const isTouched = useRef(false);
  const { isOpen, setIsOpen } = useModalContext();

  const handleOpenModal = () => {
    setIsOpen?.(true);
    isTouched.current = true;
  };

  useEffect(() => {
    if (isOpen || !isTouched.current) return;

    const focusOpenButton = () => {
      const openButton = openButtonRef.current;

      if (!openButton) {
        throw new Error('openButtonRef is not assigned');
      }

      openButton.focus();
    };

    focusOpenButton();
  }, [isOpen, isTouched]);

  return (
    <button
      type="button"
      ref={openButtonRef}
      onClick={handleOpenModal}
      className={className}
    >
      {children}
    </button>
  );
};
