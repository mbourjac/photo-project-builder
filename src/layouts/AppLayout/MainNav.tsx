import { Link } from '@tanstack/react-router';
import type { Auth } from '../../services/auth/auth.types';

type MainNavProps = {
  auth: Auth | null;
};

export const MainNav = ({ auth }: MainNavProps) => {
  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-[3px] rounded-full border bg-white p-[3px] text-sm">
        <li>
          <Link
            to="/explore"
            className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
          >
            Explore
          </Link>
        </li>
        <li>
          <Link
            to="/features"
            className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
          >
            About
          </Link>
        </li>
        {auth && (
          <li>
            <Link
              to="/projects"
              className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
            >
              Projects
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
