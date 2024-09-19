import { Outlet } from '@tanstack/react-router';
import { ProjectsNav } from './ProjectsNav';

export const ProjectsLayout = () => {
  return (
    <div className="flex grow gap-8">
      <ProjectsNav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
