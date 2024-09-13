import {
  type ReactNode,
  useRef,
  useEffect,
  type HTMLAttributes,
  type KeyboardEvent,
} from 'react';
import { type IconProps, Icon } from '../../../components/ui/Icon';

type DropdownMenuButtonProps = HTMLAttributes<HTMLButtonElement> & {
  id: string;
  iconKind: IconProps['kind'];
  isActive: boolean;
  handleKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export const DropdownMenuButton = ({
  id,
  iconKind,
  isActive,
  handleKeyDown,
  children,
  ...restProps
}: DropdownMenuButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const button = buttonRef.current;

    if (!button) {
      throw new Error('buttonRef is not assigned');
    }

    button.focus();
  }, [isActive]);

  return (
    <button
      {...restProps}
      ref={buttonRef}
      id={id}
      role="menuitem"
      onKeyDown={handleKeyDown}
      className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
    >
      <Icon kind={iconKind} aria-hidden="true" className="size-5" />
      <span>{children}</span>
    </button>
  );
};
