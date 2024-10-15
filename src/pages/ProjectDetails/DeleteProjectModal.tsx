import { useState } from 'react';
import { useRouter } from '@tanstack/react-router';
import { Modal } from '../../components/ui/Modal/Modal';
import { ModalButton } from '../../components/ui/Modal/ModalButton';
import { ModalContent } from '../../components/ui/Modal/ModalContent';
import { useProjectsService } from '../../services/projects/projects.service';

type DeleteProjectModalProps = {
  projectId: string;
};

export const DeleteProjectModal = ({ projectId }: DeleteProjectModalProps) => {
  const router = useRouter();
  const { deleteProjectMutation } = useProjectsService();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    deleteProjectMutation.mutate(projectId);
    await router.invalidate();
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      setIsOpen={setIsModalOpen}
      handleCloseModal={handleCancelDelete}
    >
      <ModalButton className="w-full cursor-pointer rounded-lg border p-2 text-sm transition-colors duration-150 hover:bg-zinc-100">
        Delete project
      </ModalButton>
      <ModalContent>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <h2 id="modal-heading" className="text-xl font-bold">
              Do you want to proceed?
            </h2>
            <p className="text-zinc-600">
              This action cannot be undone. It will permanently delete your
              project.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancelDelete}
              className="rounded-lg border px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => void handleConfirmDelete()}
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
