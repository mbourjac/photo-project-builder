import { queryOptions } from '@tanstack/react-query';
import { getUserRequest } from './users.api';
import { userSchema } from './users.schemas';

export const useUsersService = () => {
  const getUserQueryOptions = (userId: string) =>
    queryOptions({
      queryKey: ['user', { userId }],
      queryFn: async () => {
        const user = await getUserRequest(userId);
        return userSchema.parse(user);
      },
    });

  return { getUserQueryOptions };
};
