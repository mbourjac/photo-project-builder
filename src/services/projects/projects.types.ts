import type { z } from 'zod';
import type { projectSchema } from './projects.schemas';

export type Project = z.infer<typeof projectSchema>;
