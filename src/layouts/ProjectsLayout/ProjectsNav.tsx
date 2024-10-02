import { Link } from '@tanstack/react-router';
import { Icon } from '../../components/ui/Icon';
import { Separator } from '../../components/ui/Separator';
import { NewProjectModal } from './NewProjectModal';

export const ProjectsNav = () => {
  return (
    <section className="sticky top-[4.5rem] flex h-[calc(100vh-7.5rem)] w-64 flex-col rounded-3xl border bg-white p-3 text-sm">
      <NewProjectModal />
      <Separator />
      <nav aria-label="Projects" className="flex flex-col">
        <Link
          to="/projects/timeline"
          className="flex w-full items-center gap-2 rounded-xl p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100"
        >
          <Icon kind="calendar" aria-hidden="true" className="size-5" />
          <span>Timeline</span>
        </Link>
        <Link
          to="/projects/tags"
          className="flex w-full items-center gap-2 rounded-xl p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100"
        >
          <Icon kind="tag" aria-hidden="true" className="size-5" />
          <span>Tags</span>
        </Link>
        <Link
          to="/projects/map"
          className="flex w-full items-center gap-2 rounded-xl p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100"
        >
          <Icon kind="pin" aria-hidden="true" className="size-5" />
          <span>Map</span>
        </Link>
      </nav>
      <Separator />
    </section>
  );
};
