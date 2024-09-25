import { z } from 'zod';

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  isPublic: z.boolean(),
  tags: z.array(z.string()),
  pictures: z.array(
    z.object({
      path: z.string(),
    }),
  ),
});

export const allProjectsSchema = z.array(projectSchema);
