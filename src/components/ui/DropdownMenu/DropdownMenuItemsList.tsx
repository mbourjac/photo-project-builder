import { useContext } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { DropdownMenuButton } from './DropdownMenuButton';
import { DropdownMenuContext } from './DropdownMenuContext';
import { DropdownMenuLink } from './DropdownMenuLink';
import { DropdownMenuSeparator } from './DropdownMenuSeparator';

export const DropdownMenuItemsList = () => {
  const dropdownMenuContext = useContext(DropdownMenuContext);

  if (!dropdownMenuContext) {
    throw new Error(
      'useContext(DropdownMenuContext) has to be used within a DropdownMenuContext.Provider',
    );
  }

  const { items } = dropdownMenuContext;

  return (
    <ul>
      {items.map(({ hasSeparator, ...restItem }) => {
        return (
          <Fragment key={restItem.id}>
            {hasSeparator && (
              <li>
                <DropdownMenuSeparator />
              </li>
            )}
            <li>
              {restItem.type === 'link' ?
                <DropdownMenuLink {...restItem}>
                  {restItem.label}
                </DropdownMenuLink>
              : <DropdownMenuButton {...restItem}>
                  {restItem.label}
                </DropdownMenuButton>
              }
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};
