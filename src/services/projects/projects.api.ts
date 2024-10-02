import type { AxiosResponse } from 'axios';
import { baseAPI } from '../../lib/axios.instance';
import type { CreateProject } from './projects.types';

export const getAllProjectsRequest = async () => {
  const { data } = await baseAPI.get<AxiosResponse>(`/projects`);
  console.log(data);

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
