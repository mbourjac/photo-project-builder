import { Link, useLocation } from '@tanstack/react-router';
import { HoverHighlightList } from '../../components/ui/HoverHighlightList';
import type { Auth } from '../../services/auth/auth.types';

type MainNavProps = {
  auth: Auth | null;
};

export const MainNav = ({ auth }: MainNavProps) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <nav aria-label="Main">
      <HoverHighlightList
        layoutId="mainNav"
        resetKey={pathname}
        listClassName="flex h-fit gap-[3px] rounded-full border bg-white p-[3px] text-sm"
        itemHighlightClassName="rounded-full bg-zinc-100"
      >
        <Link
          to="/explore"
          className="relative z-10 inline-block rounded-full px-6 py-1.5 transition-colors"
        >
          Explore
        </Link>
        <Link
          to="/features"
          className="relative z-10 inline-block rounded-full px-6 py-1.5 transition-colors"
        >
          Features
        </Link>
        <Link
          to="/about"
          className="relative z-10 inline-block rounded-full px-6 py-1.5 transition-colors"
        >
          About
        </Link>
        {auth && (
          <Link
            to="/projects"
            className="relative z-10 inline-block rounded-full px-6 py-1.5 transition-colors"
          >
            Projects
          </Link>
        )}
      </HoverHighlightList>
    </nav>
  );
};
