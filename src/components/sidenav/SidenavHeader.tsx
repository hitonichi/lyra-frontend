'use client';

import { Boxes } from 'lucide-react';
import Logo from '../logo';
import STRINGS from '@/lib/strings';

const SideNavHeader = () => {
  return (
    <div className="flex ml-2 py-3 items-center justify-start gap-2 text-primary">
      {/* <Boxes size={48} /> */}
      <Logo size={64} />
      <p className="text-3xl ml-4 font-bold">{STRINGS.appName}</p>
    </div>
  );
};

export default SideNavHeader;
