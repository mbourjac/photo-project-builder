export const ProjectsSkeleton = () => {
  return (
    <div className="grid h-fit grow grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4 pb-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-3xl border bg-white p-3"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="h-6 w-32 max-w-full animate-pulse truncate rounded-full bg-zinc-100"></div>
            <div className="h-8 w-20 max-w-full shrink-0 animate-pulse truncate rounded-full bg-zinc-100 px-4 py-1.5 text-sm"></div>
          </div>
          <div className="aspect-[3/2] animate-pulse overflow-hidden rounded-xl bg-zinc-100"></div>
        </div>
      ))}
    </div>
  );
};
