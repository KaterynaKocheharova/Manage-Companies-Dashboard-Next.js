import Image from 'next/image';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <aside className="fixed z-50 w-60 h-screen bg-gray-900">
      <Image
        alt="logo"
        width={122}
        height={24}
        src="/images/logo.png"
        className="py-8 mb-11 mx-auto"
      />
      <ul>
        <SidebarItem
          src="/sprite.svg#icon-squares"
          alt="dahsboard icon"
          path="/dashboard"
        >
          Dashboard
        </SidebarItem>
        <SidebarItem
          src="/sprite.svg#icon-briefcase"
          alt="companies icon"
          path="/companies"
        >
          Companies
        </SidebarItem>
      </ul>
    </aside>
  );
};

export default Sidebar;
