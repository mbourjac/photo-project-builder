import { useEffect } from 'react';
import { useNavigate, useRouter } from '@tanstack/react-router';
import { Input } from '../../components/forms/Input';
import { TextArea } from '../../components/forms/TextArea';
import { Modal } from '../../components/ui/Modal';
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
    <Modal buttonLabel="New project" onClose={reset}>
      <div className="flex flex-col gap-12">
        <p className="text-xl font-bold">Create a new project</p>
        <form
          onSubmit={(event) => void handleSubmit(onSubmit)(event)}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-8">
              <Input id="title" label="Title" isRequired config={configInput} />
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
    </Modal>
  );
};
