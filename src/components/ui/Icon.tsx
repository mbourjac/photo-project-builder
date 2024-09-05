import type { SVGAttributes } from 'react';
import { cn } from '../../lib/tailwind.utils';

export type IconProps = (Omit<
  SVGAttributes<SVGSVGElement>,
  | 'xmlns'
  | 'viewBox'
  | 'className'
  | 'fill'
  | 'strokeWidth'
  | 'stroke'
  | 'aria-hidden'
> & {
  kind: keyof typeof iconsMapping;
  className?: string;
}) &
  (
    | {
        'aria-hidden'?: SVGAttributes<SVGSVGElement>['aria-hidden'];
        screenReaderLabel?: never;
      }
    | {
        'aria-hidden'?: never;
        screenReaderLabel?: string;
      }
  );

const iconsMapping = {
  visible: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </>
  ),
  hidden: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  ),
  success: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  ),
  error: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    />
  ),
  logOut: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 15L15.75 18.75C15.75 19.3467 15.5129 19.919 15.091 20.341C14.669 20.7629 14.0967 21 13.5 21L7.5 21C6.90326 21 6.33097 20.7629 5.90901 20.341C5.48705 19.919 5.25 19.3467 5.25 18.75L5.25 5.25C5.25 4.65326 5.48705 4.08097 5.90901 3.65901C6.33097 3.23705 6.90326 3 7.5 3L13.5 3C14.0967 3 14.669 3.23705 15.091 3.65901C15.5129 4.08097 15.75 4.65326 15.75 5.25L15.75 9M18.75 9L21.75 12M21.75 12L18.75 15M21.75 12L9 12"
    />
  ),
};

export const Icon = ({
  kind,
  className,
  screenReaderLabel,
  ...attributes
}: IconProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className={cn('size-5', className)}
        aria-hidden={
          screenReaderLabel ? !!screenReaderLabel : attributes['aria-hidden']
        }
        {...attributes}
      >
        {iconsMapping[kind]}
      </svg>
      {screenReaderLabel && (
        <span className="sr-only">{screenReaderLabel}</span>
      )}
    </>
  );
};
