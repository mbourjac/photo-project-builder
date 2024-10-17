import { Separator } from '../../components/ui/Separator';
import { NewProjectModal } from './NewProjectModal';
import { ProjectsNavLink } from './ProjectsNavLink';

export const ProjectsSidebar = () => {
  return (
    <section className="sticky top-[5.5rem] flex h-[calc(100vh-7.5rem)] w-80 shrink-0 flex-col text-pretty rounded-3xl border bg-white p-3 text-sm">
      <NewProjectModal />
      <Separator />
      <nav aria-label="Projects" className="flex flex-col">
        <ProjectsNavLink to="/projects/timeline" iconKind="calendar">
          Timeline
        </ProjectsNavLink>
        <ProjectsNavLink to="/projects/tags" iconKind="tag">
          Tags
        </ProjectsNavLink>
        <ProjectsNavLink to="/projects/map" iconKind="pin">
          Map
        </ProjectsNavLink>
      </nav>
      <Separator />
    </section>
  );
};
