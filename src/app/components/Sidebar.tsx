'use client';
import Image from 'next/image';
import SidebarItem from './SidebarItem';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside className="fixed z-50 w-60 h-screen bg-gray-900">
      <div className="flex flex-col h-full overflow-y-auto">
        <Image
          alt="logo"
          width={122}
          height={24}
          src="/images/logo.png"
          className="py-8 mb-11 mx-auto"
        />
        <ul className="space-y-7">
          <SidebarItem
            current={pathname === '/dashboard'}
            src="/sprite.svg#icon-squares"
            alt="dahsboard icon"
            path="/dashboard"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathname === '/companies'}
            src="/sprite.svg#icon-briefcase"
            alt="companies icon"
            path="/companies"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          onClick={handleExitClick}
          className="mt-auto flex items-center p-6 mx-auto gap-2 font-medium text-white"
        >
          <svg width="18" height="18">
            <use href="/sprite.svg#icon-exit"></use>
          </svg>{' '}
          Exit
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
