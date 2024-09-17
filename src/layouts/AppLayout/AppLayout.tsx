import { Link, Outlet } from '@tanstack/react-router';
import { Toaster } from '../../components/ui/Toaster/Toaster';
import { useAuthService } from '../../services/auth/auth.service';
import { AccountDropdownMenu } from './AccountDropdownMenu';
import { AuthNav } from './AuthNav';
import { MainNav } from './MainNav';

export const AppLayout = () => {
  const { auth } = useAuthService();

  return (
    <>
      <Toaster />
      <div className="flex min-h-dvh flex-col">
        <header className="flex items-center justify-between px-8 py-4">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="size-8"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12" fill="currentColor" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <MainNav auth={auth} />
            {auth ?
              <AccountDropdownMenu auth={auth} />
            : <AuthNav />}
          </div>
        </header>
        <main className="flex grow px-8 py-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};
