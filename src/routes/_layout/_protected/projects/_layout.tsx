import { createFileRoute } from '@tanstack/react-router';
import { ProjectsLayout } from '../../../../layouts/ProjectsLayout/ProjectsLayout';

export const Route = createFileRoute('/_layout/_protected/projects/_layout')({
  component: ProjectsLayout,
});
