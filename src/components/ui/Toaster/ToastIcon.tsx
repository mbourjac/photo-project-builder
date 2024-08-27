import { Icon, type IconProps } from '../../../components/ui/Icon';

export type ToastIconProps = {
  kind: Extract<IconProps['kind'], 'success' | 'error'>;
};

export const ToastIcon = ({ kind }: ToastIconProps) => {
  return <Icon kind={kind} className="size-5" aria-hidden />;
};
