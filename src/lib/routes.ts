export interface Route {
  label: string;
  icon: string;
  href: string;
}

export const getPageTitleByRoute = (route: string) => {
  const res = [...ROUTES.base, ...ROUTES.userBase].find((r) => r.href == route);
  return res ? res.label : 'Unknown route';
};

const ROUTES: Record<string, Route[]> = {
  base: [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      href: '/dashboard',
    },
    {
      label: 'Interview Preparation',
      icon: 'briefCase',
      href: '/dashboard/interview',
    },
    {
      label: 'Roadmaps',
      icon: 'route',
      href: '/dashboard/roadmaps',
    },
    {
      label: 'Community',
      icon: 'users',
      href: '/dashboard/community',
    },
  ],
  userBase: [
    {
      label: 'Profile',
      icon: 'profile',
      href: '/profile',
    },
    {
      label: 'Settings',
      icon: 'settings',
      href: '/settings',
    },
  ],
};

export default ROUTES;
