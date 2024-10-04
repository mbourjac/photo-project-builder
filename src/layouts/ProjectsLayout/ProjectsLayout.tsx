import { Outlet } from '@tanstack/react-router';
import { ProjectsSidebar } from './ProjectsSidebar';

export const ProjectsLayout = () => {
  return (
    <main className="flex grow overflow-hidden px-8 pt-0">
      <div className="-mx-8 flex grow gap-8 overflow-auto px-8 pt-4">
        <ProjectsSidebar />
        <div className="w-full pb-8 pt-[4.5rem]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
