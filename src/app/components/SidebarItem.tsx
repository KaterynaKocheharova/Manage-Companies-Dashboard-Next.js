import Link from 'next/link';
import clsx from 'clsx';

type SidebarItemProps = {
  current?: boolean;
  src: string;
  path: string;
  alt: string;
  children: React.ReactNode;
};

const SidebarItem = ({ src, path, alt, children, current }: SidebarItemProps) => {
  return (
    <li>
      <Link className={clsx("flex items-center h-9 gap-3.5", current && "after:h-full after:ml-auto after:border-2 after:rounded-small after:border-purple-200")} href={path}>
        <svg className="ml-5" width="18" height="18" aria-label={alt}>
          <use href={src}></use>
        </svg>
        <p className="font-medium text-zinc-50">{children}</p>
      </Link>
    </li>
  );
};

export default SidebarItem;
