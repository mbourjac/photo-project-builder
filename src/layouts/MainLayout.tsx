import { Outlet } from '@tanstack/react-router';

export const MainLayout = () => {
  return (
    <main className="flex grow px-8 pt-[5.5rem]">
      <div className="flex grow pb-8">
        <Outlet />
      </div>
    </main>
  );
};
