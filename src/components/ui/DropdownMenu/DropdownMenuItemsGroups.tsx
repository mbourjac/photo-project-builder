import { Fragment } from 'react';
import { useDropdownMenuContext } from './DropdownMenuContext/DropdownMenuContext.hook';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuSeparator } from './DropdownMenuSeparator';

export const DropdownMenuItemsGroups = () => {
  const { itemsGroups } = useDropdownMenuContext();

  let itemIndex = 0;

  return itemsGroups.map((itemsGroup, index) => {
    return (
      <Fragment key={index}>
        {itemIndex > 0 && <DropdownMenuSeparator />}
        {itemsGroup.length > 1 ?
          <ul role="group">
            {itemsGroup.map((item) => (
              <Fragment key={item.id}>
                <li role="none">
                  <DropdownMenuItem item={item} index={itemIndex++} />
                </li>
              </Fragment>
            ))}
          </ul>
        : <DropdownMenuItem item={itemsGroup[0]!} index={itemIndex++} />}
      </Fragment>
    );
  });
};
