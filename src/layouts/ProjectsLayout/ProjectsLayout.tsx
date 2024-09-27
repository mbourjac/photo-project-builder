import { Outlet } from '@tanstack/react-router';
import { ProjectsNav } from './ProjectsNav';

export const ProjectsLayout = () => {
  return (
    <main className="flex grow overflow-hidden px-8 pt-0">
      <div className="-mx-8 flex grow gap-8 overflow-auto px-8 pt-4">
        <ProjectsNav />
        <div className="w-full pb-8 pt-[4.5rem]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
