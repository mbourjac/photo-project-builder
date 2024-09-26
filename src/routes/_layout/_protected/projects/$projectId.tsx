import { createFileRoute } from '@tanstack/react-router';
import { ProjectDetails } from '../../../../pages/ProjectDetails';

export const Route = createFileRoute('/_layout/_protected/projects/$projectId')(
  {
    component: ProjectDetails,
  },
);
