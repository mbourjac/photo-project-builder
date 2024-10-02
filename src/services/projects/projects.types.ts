import type { z } from 'zod';
import type { createProjectSchema, projectSchema } from './projects.schemas';

export type CreateProject = z.infer<typeof createProjectSchema>;
export type Project = z.infer<typeof projectSchema>;
