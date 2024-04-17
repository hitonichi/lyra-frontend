import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/card';
import Icon from '../icon';
import { ReactNode } from 'react';
import InterviewCard from './Interview';
import RecommendationsCard from './Recommendations';
import Roadmaps from './Roadmaps';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export interface DashboardCardProps {
  title: string;
  href?: string;
  newTab?: boolean;
  children: ReactNode;
  className: string;
}

const DashboardCard = ({ title, href, children, className, newTab = false }: DashboardCardProps) => {
  const twClasses = 'relative flex flex-col';

  return (
    <Card className={[twClasses, className].join(' ')}>
      <CardHeader className="flex flex-row items-center gap-4 pt-3 px-3 pb-2">
        <span className="font-bold text-lg ">{title}</span>
        {title == 'Community' && (
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily.dev">Daily.dev</SelectItem>
              <SelectItem value="dev.to">Dev.to</SelectItem>
              <SelectItem value="X">X</SelectItem>
            </SelectContent>
          </Select>
        )}
      </CardHeader>
      <CardContent className="px-3 flex self-stretch grow">{children}</CardContent>
      {href && (
        <Link href={href} rel={newTab ? 'noopener noreferrer' : ''} target={newTab ? '_blank' : ''}>
          <div className="p-1 absolute top-3 right-3 rounded-full bg-black/10 hover:bg-black/20">
            <Icon name="expand" size={12} />
          </div>
        </Link>
      )}
    </Card>
  );
};

DashboardCard.Interview = InterviewCard;
DashboardCard.Recommendations = RecommendationsCard;
DashboardCard.Roadmaps = Roadmaps;

export default DashboardCard;
