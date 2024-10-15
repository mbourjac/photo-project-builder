import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getErrorMessage } from '../../helpers/errors';
import {
  createProjectRequest,
  deleteProjectRequest,
  getAllProjectsRequest,
  getProjectRequest,
  updateProjectRequest,
} from './projects.api';
import { allProjectsSchema, projectSchema } from './projects.schemas';
import type { CreateProject, UpdateProject } from './projects.types';

export const useProjectsService = () => {
  const queryClient = useQueryClient();

  const getAllProjectsQueryOptions = () =>
    queryOptions({
      queryKey: ['projects'],
      queryFn: async () => {
        const projects = await getAllProjectsRequest();
        return allProjectsSchema.parse(projects);
      },
    });

  const getProjectQueryOptions = (projectId: string) =>
    queryOptions({
      queryKey: ['projects', { projectId }],
      queryFn: async () => {
        const project = await getProjectRequest(projectId);
        return projectSchema.parse(project);
      },
    });

  const createProjectMutation = useMutation({
    mutationKey: ['projects'],
    mutationFn: async (createProjectData: CreateProject) => {
      const project = await createProjectRequest(createProjectData);
      return projectSchema.parse(project);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  const updateProjectMutation = useMutation({
    mutationFn: async (updateProjectData: UpdateProject) => {
      await updateProjectRequest(updateProjectData);
    },
    onSuccess: async () => {
      toast('Your project has been updated.');
      await queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
    onError: (error) => {
      toast.success(getErrorMessage(error));
    },
  });

  const deleteProjectMutation = useMutation({
    mutationFn: async (projectId: string) => {
      await deleteProjectRequest(projectId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });

  return {
    getAllProjectsQueryOptions,
    getProjectQueryOptions,
    createProjectMutation,
    updateProjectMutation,
    deleteProjectMutation,
  };
};
