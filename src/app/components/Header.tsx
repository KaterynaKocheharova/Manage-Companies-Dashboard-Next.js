import Image from 'next/image';

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex items-center gap-9 py-6 border-b border-gray-300 pl-10 pr-7">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900 ">
        {children}
      </h1>
      <div className="w-px self-stretch bg-gray-300"></div>
      <div className="flex gap-3">
        <Image width={40} height={40} alt="avatar" src="/images/avatar.png" />
        <div>
          <p className="text-base font-semibold text-gray-900">Adam Smith</p>
          <p className="text-sm font-light text-gray-900">example@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
