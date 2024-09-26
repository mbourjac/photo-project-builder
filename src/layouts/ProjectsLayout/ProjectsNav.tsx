import { Link } from '@tanstack/react-router';
import { Icon } from '../../components/ui/Icon';

export const ProjectsNav = () => {
  return (
    <nav
      aria-label="Projects"
      className="sticky top-[4.5rem] flex h-[calc(100vh-120px)] w-64 flex-col rounded-3xl border bg-white p-3 pb-8 text-sm"
    >
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
  );
};
