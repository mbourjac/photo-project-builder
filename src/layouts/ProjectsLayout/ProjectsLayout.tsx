import { Outlet } from '@tanstack/react-router';
import { ProjectsSidebar } from './ProjectsSidebar';

export const ProjectsLayout = () => {
  return (
    <div className="flex w-full gap-8">
      <ProjectsSidebar />
      <Outlet />
    </div>
  );
};
