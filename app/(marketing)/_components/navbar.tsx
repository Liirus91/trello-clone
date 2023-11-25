import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="fixed flex items-center top-0 w-full h-14 px-4 border-b shadow-sm bg-white">
      <div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
        <Logo />
        <div className="flex items-center justify-between w-full space-x-4 md:block md:w-auto">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get TrelloClone for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
