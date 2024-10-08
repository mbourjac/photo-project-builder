import { useSuspenseQuery } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';

export const ProjectDetails = () => {
  const getProjectQuery = useRouteContext({
    from: '/_app-layout/_protected/projects/_project-details/$projectId',
    select: (context) => context.getProjectQuery,
  });
  const {
    data: { pictures },
  } = useSuspenseQuery(getProjectQuery);

  return (
    <div className="w-full">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
        {pictures.length > 0 &&
          pictures.map(({ path, title }) => (
            <div key={path}>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img src={path} alt={title} className="rounded-md object-cover" />
            </div>
          ))}
      </div>
    </div>
  );
};
