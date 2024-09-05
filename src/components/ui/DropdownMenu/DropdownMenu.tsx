import { type ReactNode, useState } from 'react';

type DropdownMenuProps = {
  userInitial: string;
  children: ReactNode;
};

export const DropdownMenu = ({ userInitial, children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative size-8">
      <button
        onClick={handleToggleMenu}
        className="size-full rounded-full bg-black text-sm text-white hover:opacity-75"
      >
        {userInitial}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-[7px] w-56 rounded-xl border bg-white p-[3px] text-sm">
          {children}
        </div>
      )}
    </div>
  );
};
