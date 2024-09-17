import { Link } from '@tanstack/react-router';

export const AuthNav = () => {
  return (
    <nav aria-label="Authentication">
      <ul className="flex items-center gap-[3px] rounded-full border bg-black p-[3px] text-sm text-white">
        <li>
          <Link
            to="/log-in"
            className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 hover:text-black data-[status=active]:bg-white data-[status=active]:text-black"
          >
            Log in
          </Link>
        </li>
        <li>
          <Link
            to="/sign-up"
            className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 hover:text-black data-[status=active]:bg-white data-[status=active]:text-black"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};
