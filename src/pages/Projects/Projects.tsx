import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const getAllProjectsQuery = useRouteContext({
    from: '/_app-layout/_protected/projects',
    select: (context) => context.getAllProjectsQuery,
  });
  const { data: projects } = useSuspenseQuery(getAllProjectsQuery);

  const hasProjects = projects.length > 0;

  return (
    <div className="grid h-fit grow grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4 pb-8">
      {hasProjects ?
        projects.map((project) => <ProjectCard key={project.id} {...project} />)
      : <p className="pt-4">You don&apos;t have any project yet.</p>}
    </div>
  );
};
