import { queryOptions } from '@tanstack/react-query';
import { getAllProjectsRequest } from './projects.api';
import { allProjectsSchema } from './projects.schemas';

export const useProjectsService = () => {
  const getAllProjectsQueryOptions = () =>
    queryOptions({
      queryKey: ['projects'],
      queryFn: async () => {
        const projects = await getAllProjectsRequest();
        return allProjectsSchema.parse(projects);
      },
    });

  return { getAllProjectsQueryOptions };
};
