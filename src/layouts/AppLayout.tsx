import { Link, Outlet, useNavigate, useRouter } from '@tanstack/react-router';
import { Toaster } from '../components/ui/Toaster/Toaster';
import { useAuthService } from '../services/auth/auth.service';

export const AppLayout = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const { auth, logOut } = useAuthService();

  const handleLogOut = async () => {
    logOut();
    await router.invalidate();
    await navigate({ to: '/' });
  };

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
              className="size-6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12" fill="currentColor" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <nav>
            <ul className="flex gap-[3px] rounded-full border bg-white p-[3px]">
              {auth ?
                <>
                  <li>
                    <Link
                      to="/dashboard"
                      className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => void handleLogOut()}
                      className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100"
                    >
                      Log out
                    </button>
                  </li>
                </>
              : <>
                  <li>
                    <Link
                      to="/log-in"
                      className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sign-up"
                      className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
                    >
                      Sign up
                    </Link>
                  </li>
                </>
              }
            </ul>
          </nav>
        </header>
        <main className="flex grow flex-col px-8 py-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};
