import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';
import type { CreateProject, UpdateProject } from './projects.types';

export const getAllProjectsRequest = async () => {
  const { data } = await baseAPI.get<AxiosResponse>(`/projects`);
  return data;
};

export const getProjectRequest = async (projectId: string) => {
  const { data } = await baseAPI.get<AxiosResponse>(`/projects/${projectId}`);
  return data;
};

export const createProjectRequest = async (
  createProjectData: CreateProject,
) => {
  const { data } = await baseAPI.post<AxiosResponse>(
    '/projects/create',
    createProjectData,
  );

  return data;
};

export const updateProjectRequest = async ({
  projectId,
  projectInfo,
  projectPictures,
  projectTags,
}: UpdateProject) => {
  const formData = new FormData();

  Object.entries(projectInfo).forEach(([key, value]) => {
    formData.append(key, value);
  });

  projectPictures.forEach((picture) => {
    formData.append('pictures', picture);
  });

  projectTags.forEach((tag) => {
    formData.append('tags[]', tag);
  });

  const { data } = await baseAPI.put<AxiosResponse>(
    `/projects/${projectId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return data;
};
