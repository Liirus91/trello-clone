import { Logo } from '@/components/logo';

export const Navbar = () => {
  return (
    <div className="fixed flex items-center top-0 w-full h-14 px-4 border-b shadow-sm bg-white">
      <div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
        <Logo />
      </div>
    </div>
  );
};
