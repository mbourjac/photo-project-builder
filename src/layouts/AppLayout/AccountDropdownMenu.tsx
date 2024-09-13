import { useCallback, useMemo } from 'react';
import { useRouter, useNavigate } from '@tanstack/react-router';
import {
  DropdownMenu,
  type DropdownMenuProps,
} from '../../components/ui/DropdownMenu/DropdownMenu';
import { DropdownMenuItemsGroups } from '../../components/ui/DropdownMenu/DropdownMenuItemsGroups';
import { DropdownMenuSeparator } from '../../components/ui/DropdownMenu/DropdownMenuSeparator';
import { useAuthService } from '../../services/auth/auth.service';
import type { Auth } from '../../services/auth/auth.types';

type AccountDropdownMenuProps = {
  auth: Auth;
};

export const AccountDropdownMenu = ({ auth }: AccountDropdownMenuProps) => {
  const router = useRouter();
  const navigate = useNavigate();
  const { logOut } = useAuthService();

  const { username, email } = auth.user;

  const handleLogOut = useCallback(async () => {
    logOut();
    await router.invalidate();
    await navigate({ to: '/' });
  }, [router, navigate, logOut]);

  const itemsGroups = useMemo(
    () =>
      [
        [
          {
            type: 'link',
            id: 'profile',
            to: '/profile',
            iconKind: 'profile',
            label: 'Profile',
          },
          {
            type: 'link',
            id: 'settings',
            to: '/settings',
            iconKind: 'settings',
            label: 'Settings',
          },
        ],
        [
          {
            type: 'button',
            id: 'log-out',
            onClick: () => void handleLogOut(),
            iconKind: 'logOut',
            label: 'Log out',
          },
        ],
      ] satisfies DropdownMenuProps['itemsGroups'],
    [handleLogOut],
  );

  return (
    <DropdownMenu itemsGroups={itemsGroups} label={username.charAt(0)}>
      <div className="flex flex-col gap-1 p-2">
        <p className="truncate font-semibold">{username}</p>
        <p className="truncate font-light">{email}</p>
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuItemsGroups />
    </DropdownMenu>
  );
};
