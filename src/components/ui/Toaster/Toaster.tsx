import { AnimatePresence } from 'framer-motion';
import { useToaster } from 'react-hot-toast';
import { ToastNotification } from './ToastNotification';

type ToasterProps = {
  toastsLimit?: number;
  reverseOrder?: boolean;
  gutter?: number;
};

export const Toaster = ({
  toastsLimit = 3,
  reverseOrder = false,
  gutter = 8,
}: ToasterProps) => {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      <AnimatePresence>
        {toasts.map((toast, index) => (
          <ToastNotification
            key={toast.id}
            toast={toast}
            offset={calculateOffset(toast, {
              reverseOrder,
              gutter,
            })}
            isOverLimit={index > toastsLimit - 1}
            updateHeight={updateHeight}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
