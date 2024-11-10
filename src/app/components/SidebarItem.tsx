
type SidebarItemProps = {
  src: string;
  path: string;
  alt: string;
  children: React.ReactNode;
};

const SidebarItem = ({ src, path, alt, children }: SidebarItemProps) => {
  return (
    <li>
      <a className="flex items-center h-9 gap-3.5" href={path}>
        <svg className="ml-5" width="18" height="18" aria-label={alt}>
          <use href={src}></use>
        </svg>
        <p className="font-medium text-zinc-50">{children}</p>
      </a>
    </li>
  );
};

export default SidebarItem;
