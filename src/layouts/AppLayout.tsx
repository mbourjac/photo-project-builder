import { Link, Outlet, useNavigate, useRouter } from '@tanstack/react-router';
import { Toaster } from '../components/ui/Toaster/Toaster';
import { useAuthService } from '../services/auth/auth.service';

export const AppLayout = () => {
  const router = useRouter();
  const navigate = useNavigate();
  const { auth, logout } = useAuthService();

  const handleLogout = async () => {
    logout();
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
          {auth ?
            <div className="flex gap-8">
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={() => void handleLogout()}>Logout</button>
            </div>
          : <nav>
              <ul className="flex gap-8">
                <li>
                  <Link to="/log-in">Log in</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign up</Link>
                </li>
              </ul>
            </nav>
          }
        </header>
        <main className="flex grow flex-col px-8 py-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};
