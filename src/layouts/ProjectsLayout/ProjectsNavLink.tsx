import { Link, type LinkProps, type ReactNode } from '@tanstack/react-router';
import { Icon, type IconProps } from '../../components/ui/Icon';

type ProjectsNavLinkProps = LinkProps & {
  to: LinkProps['to'];
  iconKind: IconProps['kind'];
  children: ReactNode;
};

export const ProjectsNavLink = ({
  iconKind,
  children,
  ...restProps
}: ProjectsNavLinkProps) => {
  return (
    <Link
      {...restProps}
      className="flex w-full items-center gap-2 rounded-lg p-2 text-left hover:bg-zinc-100 focus:bg-zinc-100"
    >
      <Icon kind={iconKind} aria-hidden="true" className="size-5" />
      <span>{children}</span>
    </Link>
  );
};
