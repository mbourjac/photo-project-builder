import { type ReactNode, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../../hooks/use-click-outside';
import { useFixedBody } from '../../../hooks/use-fixed-body';
import { useModalContext } from './ModalContext/ModalContext.hook';

export type ModalContentProps = {
  ariaLabelledby?: string;
  children: ReactNode;
};

export const ModalContent = ({
  ariaLabelledby,
  children,
}: ModalContentProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isOpen, handleCloseModal } = useModalContext();

  useClickOutside(modalRef, handleCloseModal, isOpen);
  useFixedBody(isOpen);

  const getModalFocusableElements = () => {
    const modal = modalRef.current;

    if (!modal) {
      throw new Error('modalRef is not assigned');
    }

    return modal.querySelectorAll<HTMLElement>(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    const focusFirstElement = () => {
      const focusableElements = getModalFocusableElements();

      if (focusableElements.length === 0) return;

      focusableElements[0]!.focus();
    };

    focusFirstElement();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const focusableElements = getModalFocusableElements();

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
                aria-labelledby={ariaLabelledby}
                className="relative w-[min(32rem,100%)] cursor-default rounded-3xl border bg-white p-6"
                initial={{ scale: 0.925 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.925 }}
                transition={{
                  type: 'spring',
                  stiffness: 175,
                  damping: 25,
                }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById('root')!,
      )}
    </>
  );
};
