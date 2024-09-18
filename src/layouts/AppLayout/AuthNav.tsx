import { Link, useLocation } from '@tanstack/react-router';
import { HoverHighlightList } from '../../components/ui/HoverHighlightList';

export const AuthNav = () => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <nav aria-label="Authentication">
      <HoverHighlightList
        layoutId="authNav"
        resetKey={pathname}
        listClassName="text-white flex h-fit gap-[3px] rounded-full border bg-black p-[3px] text-sm"
        itemHighlightClassName="rounded-full bg-slate-600"
      >
        <Link
          to="/log-in"
          className="relative z-10 inline-block rounded-full px-6 py-1.5 transition-colors"
        >
          Log in
        </Link>
        <Link
          to="/sign-up"
          className="relative z-10 inline-block rounded-full px-6 py-1.5 transition-colors"
        >
          Sign up
        </Link>
      </HoverHighlightList>
    </nav>
  );
};
