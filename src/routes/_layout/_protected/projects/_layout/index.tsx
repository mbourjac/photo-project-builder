import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '../../../../../pages/Projects';

export const Route = createFileRoute('/_layout/_protected/projects/_layout/')({
  component: Projects,
});
