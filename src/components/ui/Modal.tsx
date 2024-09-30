import {
  type ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../hooks/use-click-outside';
import { useFixedBody } from '../../hooks/use-fixed-body';
import { Icon } from './Icon';

export type ModalProps = {
  buttonLabel: string;
  modalAriaLabelledby?: string;
  children: ReactNode;
  onClose?: () => void;
};

export const Modal = ({
  buttonLabel,
  modalAriaLabelledby,
  children,
  onClose,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isTouched = useRef(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    isTouched.current = true;
  };

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  useClickOutside(modalRef, handleCloseModal, isOpen);
  useFixedBody(isOpen);

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
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const focusCloseButton = () => {
      const closeButton = closeButtonRef.current;

      if (!closeButton) {
        throw new Error('closeButtonRef is not assigned');
      }

      closeButton.focus();
    };

    focusCloseButton();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const modal = modalRef.current;

      if (!modal) {
        throw new Error('modalRef is not assigned');
      }

      const focusableElements = modal.querySelectorAll<HTMLElement>(
        'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) return;

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      const isFirstFocusableElementActive =
        document.activeElement === firstFocusableElement;
      const isLastFocusableElementActive =
        document.activeElement === lastFocusableElement;

      if (event.shiftKey && isFirstFocusableElementActive) {
        event.preventDefault();
        lastFocusableElement?.focus();
      } else if (!event.shiftKey && isLastFocusableElementActive) {
        event.preventDefault();
        firstFocusableElement?.focus();
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      trapFocus(event);
      closeOnEscape(event);
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleCloseModal]);

  return (
    <>
      <button
        ref={openButtonRef}
        onClick={handleOpenModal}
        className="flex w-full items-center gap-2 rounded-xl bg-black p-2 text-left text-white hover:opacity-75"
      >
        <Icon kind="plus" aria-hidden="true" className="size-5" />
        <span>{buttonLabel}</span>
      </button>
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex min-h-dvh grow items-center justify-center overflow-auto bg-zinc-100/80 p-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={modalAriaLabelledby}
                className="relative w-[min(32rem,100%)] cursor-default rounded-3xl border bg-white p-6 pt-16"
                initial={{ scale: 0.925 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.925 }}
                transition={{
                  type: 'spring',
                  stiffness: 175,
                  damping: 25,
                }}
              >
                <button
                  ref={closeButtonRef}
                  onClick={handleCloseModal}
                  className="absolute right-6 top-6 z-10 flex size-8 items-center justify-center rounded-full bg-black hover:opacity-80"
                >
                  <Icon
                    kind="close"
                    screenReaderLabel="Close modal"
                    className="text-white"
                  />
                </button>
                <div className="h-full overflow-auto">{children}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById('root')!,
      )}
    </>
  );
};
