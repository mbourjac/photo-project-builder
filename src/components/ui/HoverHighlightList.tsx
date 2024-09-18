import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/tailwind.utils';

type HoverHighlightListProps = {
  layoutId: string;
  resetKey?: string;
  listClassName?: string;
  itemHighlightClassName?: string;
  children: ReactNode;
};

export const HoverHighlightList = ({
  layoutId,
  resetKey,
  listClassName,
  itemHighlightClassName,
  children,
}: HoverHighlightListProps) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  const getActiveItemIndex = () =>
    itemRefs.current.findIndex((item) =>
      item?.querySelector('[data-status="active"]'),
    );

  const handleMouseEnter = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveItemIndex(getActiveItemIndex());
  };

  useEffect(() => {
    setActiveItemIndex(getActiveItemIndex());
  }, [resetKey]);

  if (!Array.isArray(children)) return null;

  return (
    <ul className={listClassName} onMouseLeave={handleMouseLeave}>
      {children.map((child, index) => (
        <li
          ref={(node) => (itemRefs.current[index] = node)}
          key={index}
          className="group relative"
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <AnimatePresence>
            {activeItemIndex === index && (
              <motion.span
                className={cn('absolute inset-0', itemHighlightClassName)}
                layoutId={layoutId}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {child}
        </li>
      ))}
    </ul>
  );
};
