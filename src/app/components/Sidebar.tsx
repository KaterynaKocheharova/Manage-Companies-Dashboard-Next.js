import Image from 'next/image';

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
    </aside>
  );
};

export default Sidebar;
