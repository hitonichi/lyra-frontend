'use client';

import SideNav from '@/components/sidenav';
import ROUTES, { Route } from '@/lib/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';

const SideBar = () => {
  const pathname = usePathname();
  const isCurrentRoute = (route: string) => {
    if (!pathname || !route) return false;
    return pathname == route;
    // return pathname.split('/')[1] == route.split('/')[1];
  };

  const renderItems = (routes: Route[]) => {
    return (
      <>
        {routes.map(({ label, href, icon }) => (
          <SideNav.Item
            key={label}
            label={label}
            icon={icon}
            href={href}
            as={Link}
            onClick={() => {
              console.log(`${label} clicked`);
            }}
            selected={isCurrentRoute(href)}
          />
        ))}
      </>
    );
  };

  return (
    <SideNav>
      <>
        <>
          <SideNav.Header />
          <Separator className="bg-muted-foreground mix-blend-color-burn h-[2px] my-2" />
        </>
        <div className="h-full flex flex-col gap-2 justify-start">
          {/* In the future, this list of route should be fetched from an endpoint (access control service) */}
          {renderItems(ROUTES.base)}
          <Separator className="bg-muted-foreground mix-blend-color-burn h-[2px] my-1" />
          {/* This one stays local, since all user should have these routes */}
          {renderItems(ROUTES.userBase)}
        </div>
        <>
          <Separator className="bg-muted-foreground mix-blend-color-burn h-[2px] my-2" />
          {/* <SideNav.Footer /> */}
        </>
      </>
    </SideNav>
  );
};

export default SideBar;
