import { useEffect, type RefObject } from 'react';

export const useClickOutside = (
  elementRef: RefObject<HTMLElement>,
  callback: () => void,
  isActive: boolean,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [elementRef, callback, isActive]);
};
