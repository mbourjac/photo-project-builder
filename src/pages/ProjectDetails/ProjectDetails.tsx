import { useCallback, useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';
import { FieldWrapper } from '../../components/app/FieldWrapper';
import { Input } from '../../components/forms/Input';
import { TextArea } from '../../components/forms/TextArea';
import { Separator } from '../../components/ui/Separator';
import { arraysAreEqual } from '../../helpers/arrays';
import { useZodForm } from '../../hooks/use-zod-form';
import { router } from '../../router/router.instance';
import { updateProjectInfoSchema } from '../../services/projects/projects.schemas';
import { useProjectsService } from '../../services/projects/projects.service';
import type { UpdateProjectInfo } from '../../services/projects/projects.types';
import { DropzoneGallery } from './DropzoneGallery';
import { ProjectTagsInput } from './ProjectTagsInput';

export interface SelectedPicture extends File {
  preview: string;
}

export const ProjectDetails = () => {
  const { updateProjectMutation } = useProjectsService();
  const getProjectQuery = useRouteContext({
    from: '/_app-layout/_protected/projects/_project-details/$projectId',
    select: (context) => context.getProjectQuery,
  });
  const {
    data: { id, title, description, pictures, tags },
  } = useSuspenseQuery(getProjectQuery);

  const initialTags = tags.map(({ name }) => name);

  const [updatedTags, setUpdatedTags] = useState<string[]>(initialTags);
  const [selectedPictures, setSelectedPictures] = useState<SelectedPicture[]>(
    [],
  );

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
      projectPictures: selectedPictures,
      projectTags: updatedTags,
    });
    setSelectedPictures([]);
    await router.invalidate();
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedPictures = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) }),
      );

      setSelectedPictures((prevSelectedPictures) => [
        ...prevSelectedPictures,
        ...selectedPictures,
      ]);
    },
    [setSelectedPictures],
  );

  const handleCancelChanges = () => {
    resetForm();
    setSelectedPictures([]);
    setUpdatedTags(initialTags);
  };

  const isEditButtonDisabled =
    (!isFormDirty &&
      selectedPictures.length === 0 &&
      arraysAreEqual(updatedTags, initialTags)) ||
    updateProjectMutation.isPending;

  // Reset the form when the query data changes
  useEffect(() => {
    resetForm({
      title,
      description: description ?? undefined,
    });
  }, [title, description, resetForm]);

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
            <ProjectTagsInput tags={updatedTags} setTags={setUpdatedTags} />
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
      <DropzoneGallery
        selectedPictures={selectedPictures}
        setSelectedPictures={setSelectedPictures}
        onDrop={onDrop}
      >
        {pictures.length > 0 &&
          pictures.map(({ id, path, title }) => (
            <div key={id}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={path} alt={title} className="rounded-md object-cover" />
            </div>
          ))}
      </DropzoneGallery>
    </div>
  );
};
