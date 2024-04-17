import SideBarLayout from '@/components/sidebar-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SideBarLayout>{children}</SideBarLayout>;
}
