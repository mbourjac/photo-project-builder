import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { Input } from '../../components/forms/Input';
import { TextArea } from '../../components/forms/TextArea';
import { Icon } from '../../components/ui/Icon';
import { Modal } from '../../components/ui/Modal/Modal';
import { ModalButton } from '../../components/ui/Modal/ModalButton';
import { ModalContent } from '../../components/ui/Modal/ModalContent';
import { useZodForm } from '../../hooks/use-zod-form';
import { createProjectSchema } from '../../services/projects/projects.schemas';
import { useProjectsService } from '../../services/projects/projects.service';
import type { CreateProject } from '../../services/projects/projects.types';

export const NewProjectModal = () => {
  const navigate = useNavigate();
  const router = useRouter();

  const { createProjectMutation } = useProjectsService();
  const { handleSubmit, configInput, reset } = useZodForm(createProjectSchema, {
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    reset();
  }, [reset]);

  const onSubmit = async (data: CreateProject) => {
    createProjectMutation.mutate(data);
    await router.invalidate();
  };

  useEffect(() => {
    const newProject = createProjectMutation.data;

    if (newProject) {
      void navigate({
        to: '/projects/$projectId',
        params: { projectId: newProject.id },
      });
    }
  }, [createProjectMutation.data, navigate]);

  return (
    <Modal
      isOpen={isModalOpen}
      setIsOpen={setIsModalOpen}
      handleCloseModal={handleCloseModal}
    >
      <ModalButton className="flex w-full items-center gap-2 rounded-lg bg-black p-2 text-left text-white hover:opacity-75">
        <Icon kind="plus" aria-hidden="true" className="size-5" />
        <span>New project</span>
      </ModalButton>
      <ModalContent ariaLabelledby="modal-heading">
        <div className="pt-10">
          <button
            onClick={handleCloseModal}
            className="absolute right-6 top-6 z-10 flex size-8 items-center justify-center rounded-full bg-black hover:opacity-80"
          >
            <Icon
              kind="close"
              screenReaderLabel="Close modal"
              className="text-white"
            />
          </button>
          <div className="h-full overflow-auto">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <h2 id="modal-heading" className="text-xl font-bold">
                  Create a new project
                </h2>
                <p className="text-zinc-600">
                  You can add pictures once the project is created.
                </p>
              </div>
              <form
                onSubmit={(event) => void handleSubmit(onSubmit)(event)}
                className="flex flex-col gap-12"
              >
                <div className="flex flex-col gap-12">
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-8">
                    <Input
                      id="title"
                      label="Title"
                      isRequired
                      config={configInput}
                    />
                    <TextArea
                      id="description"
                      label="Description"
                      config={configInput}
                    />
                  </div>
                  <button
                    disabled={createProjectMutation.isPending}
                    className="self-end rounded-lg bg-black px-4 py-2.5 text-sm text-white transition-colors duration-150 disabled:opacity-50"
                  >
                    Create project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
