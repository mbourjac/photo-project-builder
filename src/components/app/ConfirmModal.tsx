import type { ReactNode } from 'react';
import { Modal } from '../ui/Modal/Modal';
import { ModalContent } from '../ui/Modal/ModalContent';

type ConfirmModalProps = {
  title: string;
  description: string;
  isOpen: boolean;
  handleCancel: () => void;
  handleContinue: () => void;
  children?: ReactNode;
};

export const ConfirmModal = ({
  title,
  description,
  isOpen,
  handleCancel,
  handleContinue,
  children,
}: ConfirmModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      handleCloseModal={() => {
        console.log();
      }}
    >
      {children}
      <ModalContent ariaLabelledby="modal-title">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 id="modal-title" className="text-xl font-bold">
              {title}
            </h2>
            <p className="text-zinc-600">{description}</p>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="rounded-lg border px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="rounded-lg bg-black px-4 py-2.5 text-sm text-white transition-colors duration-150 hover:opacity-80"
            >
              Continue
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
