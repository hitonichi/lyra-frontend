import { auth } from '@/auth';
import { Button } from '../ui/button';
import { ReactNode } from 'react';
import Link from 'next/link';
import UserSessionDisplay from '../user-session';
import SideBar from '../sideBar';
import Logo from '../logo';
import STRINGS from '@/lib/strings';
import NavMenu from '../nav-menu';
import PageTitle from './pageTitle';
import { Footer } from './footer';
import { ChatBox } from '../chatbox';

const S = STRINGS.homepage;

export default async function SideBarLayout({ children }: { children?: ReactNode }) {
  const session = await auth();
  // console.log('Current session', session);

  if (!session) {
    return (
      <div className="min-w-full min-h-[100vh] relative">
        <div
          className={`min-h-[var(--navbar-height)] sticky top-0 flex flex-row justify-center gap-4 items-center bg-white px-4 py-3`}
        >
          <div className="absolute left-4 flex gap-2 items-center justify-start">
            <Logo type="black" size={48} />
            <p className="text-primary text-2xl font-medium ">{S.title}</p>
          </div>

          <Link className="absolute right-4" href={'/login'}>
            <Button>{S.nav.login}</Button>
          </Link>
          {/* <Link href={'/'}>
            <Button variant={'ghost'}>{S.nav.home}</Button>
          </Link>
          <Link href={'/about'}>
            <Button variant={'ghost'}>{S.nav.about}</Button>
          </Link> */}
          <NavMenu />
        </div>
        <div className={`min-w-full p-4`}>{children}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative grid grid-cols-12 min-w-full h-[100vh] ">
      <aside className="col-span-2 h-full border-r-2">
        <SideBar />
      </aside>
      <div className="col-span-10 w-full h-full relative">
        <div className="w-full h-[var(--navbar-height)] flex flex-row justify-center gap-4 items-center border-b-2 px-4 py-3">
          <PageTitle />
          <div className="absolute right-4 flex flex-row items-center gap-3 justify-center">
            <UserSessionDisplay session={session} />
          </div>
        </div>

        <div className="w-full h-[calc(100vh-var(--navbar-height))] overflow-y-scroll scroll-smooth p-6">
          {children}
        </div>
      </div>

      {/* <ChatBox /> */}
    </div>
  );
}
