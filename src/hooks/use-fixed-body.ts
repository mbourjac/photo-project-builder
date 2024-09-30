import { useEffect } from 'react';

export const useFixedBody = (isFixed: boolean) => {
  const { body } = document;

  useEffect(() => {
    body.style.overflow = isFixed ? 'hidden' : 'auto';
    body.style.height = isFixed ? '100vh' : 'auto';

    return () => {
      body.style.overflow = 'auto';
      body.style.height = 'auto';
    };
  }, [isFixed, body]);
};
