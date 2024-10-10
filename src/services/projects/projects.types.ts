import type { z } from 'zod';
import type {
  createProjectSchema,
  projectPictureSchema,
  projectSchema,
  updateProjectInfoSchema,
} from './projects.schemas';

export type Project = z.infer<typeof projectSchema>;

export type ProjectPicture = z.infer<typeof projectPictureSchema>;

export type CreateProject = z.infer<typeof createProjectSchema>;

export type UpdateProjectInfo = z.infer<typeof updateProjectInfoSchema>;

export type UpdateProject = {
  projectId: string;
  projectInfo: UpdateProjectInfo;
  projectPictures: File[];
  projectTags?: string[];
};
