import type { z } from 'zod';
import type {
  createProjectSchema,
  projectPictureSchema,
  projectSchema,
} from './projects.schemas';

export type CreateProject = z.infer<typeof createProjectSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectPicture = z.infer<typeof projectPictureSchema>;
