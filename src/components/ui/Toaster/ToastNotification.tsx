import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Toast, useToaster } from 'react-hot-toast';
import { toast as baseToast } from 'react-hot-toast';
import { ToastIcon } from './ToastIcon';

type ToastNotificationProps = {
  toast: Toast;
  offset: number;
  isOverLimit: boolean;
  updateHeight: ReturnType<typeof useToaster>['handlers']['updateHeight'];
};

export const ToastNotification = ({
  toast,
  offset,
  isOverLimit,
  updateHeight,
}: ToastNotificationProps) => {
  const { id, visible, message, height, type } = toast;

  const toastRef = (node: HTMLButtonElement | null) => {
    if (node && !height) {
      const height = node.getBoundingClientRect().height;
      updateHeight(id, height);
    }
  };

  const iconsMapping = useMemo(
    () => ({
      success: <ToastIcon kind="success" />,
      error: <ToastIcon kind="error" />,
    }),
    [],
  );

  useEffect(() => {
    if (isOverLimit) baseToast.dismiss(id);
  }, [id, isOverLimit]);

  return (
    <motion.button
      ref={toastRef}
      className="pointer-events-auto absolute bottom-4 right-8 flex w-96 gap-2 rounded-2xl border bg-white px-6 py-4 text-left"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: -offset,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 15 }}
      onClick={() => baseToast.dismiss(id)}
    >
      <span className="mt-[0.125rem] shrink-0">
        {type in iconsMapping ?
          iconsMapping[type as keyof typeof iconsMapping]
        : null}
      </span>
      <span className="overflow-hidden break-words">
        {typeof message === 'function' ? message(toast) : message}
      </span>
    </motion.button>
  );
};
