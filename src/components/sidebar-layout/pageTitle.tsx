'use client';

import { getPageTitleByRoute } from '@/lib/routes';
import { usePathname } from 'next/navigation';

const PageTitle = () => {
  const pathname = usePathname();

  return <p className="text-primary text-2xl font-bold absolute left-6">{getPageTitleByRoute(pathname)}</p>;
};

export default PageTitle;
