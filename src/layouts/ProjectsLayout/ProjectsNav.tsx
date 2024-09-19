import { Link } from '@tanstack/react-router';
import { Icon } from '../../components/ui/Icon';

export const ProjectsNav = () => {
  return (
    <nav
      aria-label="Projects"
      className="flex w-64 flex-col rounded-xl border bg-white p-2 text-sm"
    >
      <Link
        to="/projects/timeline"
        className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
      >
        <Icon kind="calendar" aria-hidden="true" className="size-5" />
        <span>Timeline</span>
      </Link>
      <Link
        to="/projects/tags"
        className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
      >
        <Icon kind="tag" aria-hidden="true" className="size-5" />
        <span>Tags</span>
      </Link>
      <Link
        to="/projects/map"
        className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
      >
        <Icon kind="pin" aria-hidden="true" className="size-5" />
        <span>Map</span>
      </Link>
    </nav>
  );
};
