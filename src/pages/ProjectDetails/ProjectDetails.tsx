import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';
import { FieldWrapper } from '../../components/app/FieldWrapper';
import { Input } from '../../components/forms/Input';
import { TextArea } from '../../components/forms/TextArea';
import { Separator } from '../../components/ui/Separator';
import { useZodForm } from '../../hooks/use-zod-form';
import { router } from '../../router/router.instance';
import { updateProjectInfoSchema } from '../../services/projects/projects.schemas';
import { useProjectsService } from '../../services/projects/projects.service';
import type { UpdateProjectInfo } from '../../services/projects/projects.types';

export const ProjectDetails = () => {
  const { updateProjectMutation } = useProjectsService();
  const getProjectQuery = useRouteContext({
    from: '/_app-layout/_protected/projects/_project-details/$projectId',
    select: (context) => context.getProjectQuery,
  });
  const {
    data: { id, title, description, pictures },
  } = useSuspenseQuery(getProjectQuery);

  const {
    handleSubmit,
    configInput,
    formState: { isDirty: isFormDirty },
    reset: resetForm,
  } = useZodForm(updateProjectInfoSchema, {
    defaultValues: {
      title: title,
      description: description ?? undefined,
    },
  });

  const onSubmit = async (data: UpdateProjectInfo) => {
    updateProjectMutation.mutate({
      projectId: id,
      projectInfo: data,
    });
    await router.invalidate();
  };

  const handleCancelChanges = () => {
    resetForm();
  };

  const isEditButtonDisabled = !isFormDirty || updateProjectMutation.isPending;

  return (
    <div className="flex w-full gap-8">
      <form
        onSubmit={(event) => void handleSubmit(onSubmit)(event)}
        className="sticky top-[5.5rem] flex h-[calc(100vh-7.5rem)] w-80 shrink-0 flex-col text-pretty rounded-3xl border bg-white p-3"
      >
        <div className="-mx-3 flex grow flex-col overflow-auto px-3">
          <div className="flex flex-col gap-4">
            <FieldWrapper>
              <Input id="title" label="Title" config={configInput} />
            </FieldWrapper>
            <FieldWrapper>
              <TextArea
                id="description"
                label="Description"
                config={configInput}
                rows={3}
              />
            </FieldWrapper>
          </div>
        </div>
        <Separator />
        <div className="grid shrink-0 grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleCancelChanges}
            disabled={isEditButtonDisabled}
            className="rounded-lg bg-black px-4 py-2.5 text-sm text-white transition-colors duration-150 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            disabled={isEditButtonDisabled}
            className="rounded-lg bg-black px-4 py-2.5 text-sm text-white transition-colors duration-150 disabled:opacity-50"
          >
            Save changes
          </button>
        </div>
      </form>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
        {pictures.length > 0 &&
          pictures.map(({ path, title }, index) => (
            <div key={index}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={path} alt={title} className="rounded-md object-cover" />
            </div>
          ))}
      </div>
    </div>
  );
};
