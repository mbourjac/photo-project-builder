import { Link, Outlet, useNavigate, useRouter } from '@tanstack/react-router';
import { DropdownMenu } from '../components/ui/DropdownMenu/DropdownMenu';
import { DropdownMenuAction } from '../components/ui/DropdownMenu/DropdownMenuAction';
import { DropdownMenuSeparator } from '../components/ui/DropdownMenu/DropdownMenuSeparator';
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
              className="size-8"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12" fill="currentColor" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav>
              <ul className="flex items-center gap-[3px] rounded-full border bg-white p-[3px] text-sm">
                {auth ?
                  <li>
                    <Link
                      to="/projects"
                      className="inline-block rounded-full px-6 py-1.5 transition-colors hover:bg-zinc-100 data-[status=active]:bg-zinc-100"
                    >
                      Projects
                    </Link>
                  </li>
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
            {auth && (
              <DropdownMenu userInitial={auth.user.username.charAt(0)}>
                <div className="flex flex-col gap-1 p-2">
                  <p className="truncate font-semibold">{auth.user.username}</p>
                  <p className="truncate font-light">{auth.user.email}</p>
                </div>
                <ul>
                  <li>
                    <DropdownMenuSeparator />
                  </li>
                  <li>
                    <DropdownMenuAction
                      linkProps={{ to: '/profile' }}
                      iconKind="profile"
                    >
                      Profile
                    </DropdownMenuAction>
                  </li>
                  <li>
                    <DropdownMenuAction
                      linkProps={{ to: '/settings' }}
                      iconKind="settings"
                    >
                      Settings
                    </DropdownMenuAction>
                  </li>
                  <li>
                    <DropdownMenuSeparator />
                  </li>
                  <li>
                    <DropdownMenuAction
                      buttonProps={{ onClick: () => void handleLogOut() }}
                      iconKind="logOut"
                    >
                      Log out
                    </DropdownMenuAction>
                  </li>
                </ul>
              </DropdownMenu>
            )}
          </div>
        </header>
        <main className="flex grow flex-col px-8 py-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};
