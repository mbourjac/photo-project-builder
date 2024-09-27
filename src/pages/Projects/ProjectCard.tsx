import { Link } from '@tanstack/react-router';
import type { Project } from '../../services/projects/projects.types';

type ProjectCardProps = Project;

export const ProjectCard = ({
  id,
  title,
  isPublic,
  pictures,
}: ProjectCardProps) => {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: id }}
      className="rounded-3xl"
    >
      <article className="flex flex-col gap-2 rounded-3xl border bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="w-fit max-w-full truncate">{title}</p>
          <p className="w-fit max-w-full shrink-0 truncate rounded-full bg-zinc-100 px-4 py-1.5 text-sm">
            {isPublic ? 'Public' : 'Private'}
          </p>
        </div>
        <div className="aspect-[3/2] overflow-hidden rounded-xl bg-black">
          {pictures.length > 0 && (
            <img
              src={pictures[0]!.path}
              alt=""
              className="size-full object-cover"
            />
          )}
        </div>
      </article>
    </Link>
  );
};
