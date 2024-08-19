import { Link, Outlet } from '@tanstack/react-router';

export const PublicLayout = () => {
  return (
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
          <ul className="flex gap-8">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex grow flex-col px-8">
        <Outlet />
      </main>
    </div>
  );
};
