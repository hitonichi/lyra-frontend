'use client';

import DashboardCard, { DashboardCardProps } from '@/components/dashboard/DashboardCard';

const views: DashboardCardProps[] = [
  {
    title: 'Interview Prparation',
    href: '/dashboard/interview',
    className: 'col-start-8 col-span-5 row-start-1 row-span-3',
    children: <DashboardCard.Interview />,
  },
  {
    title: 'Roadmaps',
    href: '/dashboard/roadmaps',
    className: 'col-start-1 col-span-7 row-start-1 row-span-3',
    children: <DashboardCard.Roadmaps />,
  },
  {
    title: 'Community',
    href: 'https://daily.dev',
    newTab: true,
    className: 'col-start-1 col-span-7 row-start-4 row-span-5',
    children: <div className="w-full flex items-center justify-center text-black/50 text-xl">Coming Soon</div>,
  },
  {
    title: 'Recommendations',
    className: 'col-start-8 col-span-5 row-start-4 row-span-5',
    children: <DashboardCard.Recommendations />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-8 h-full gap-4">
      {views.map((view) => (
        <DashboardCard key={view.title} {...view} />
      ))}
    </div>
  );
}
