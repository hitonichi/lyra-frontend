'use client';

import {
  Briefcase,
  Route,
  GraduationCap,
  BarChart4,
  Info,
  SquareKanban,
  LayoutDashboard,
  Settings,
  CircleUserRound,
  Bell,
  Users,
  Maximize2,
  SendHorizontal,
  X,
  MessageCircle,
} from 'lucide-react';

const Icon = ({ name, size = 24, className = '' }: { name: string; size?: number; className?: string }) => {
  let WrappingEle: React.ElementType | keyof JSX.IntrinsicElements;
  switch (name) {
    case 'management':
      WrappingEle = SquareKanban;
      break;
    case 'statistic':
      WrappingEle = BarChart4;
      break;
    case 'dashboard':
      WrappingEle = LayoutDashboard;
      break;
    case 'settings':
      WrappingEle = Settings;
      break;
    case 'profile':
      WrappingEle = CircleUserRound;
      break;
    case 'notification':
      WrappingEle = Bell;
      break;
    case 'users':
      WrappingEle = Users;
      break;
    case 'education':
      WrappingEle = GraduationCap;
      break;
    case 'route':
      WrappingEle = Route;
      break;
    case 'briefCase':
      WrappingEle = Briefcase;
      break;
    case 'expand':
      WrappingEle = Maximize2;
      break;
    case 'send':
      WrappingEle = SendHorizontal;
      break;
    case 'close':
      WrappingEle = X;
      break;
    case 'message':
      WrappingEle = MessageCircle;
      break;
    default:
      WrappingEle = Info;
      break;
  }

  return <WrappingEle className={className} size={size} />;
};

export default Icon;
