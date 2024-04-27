import { LucideIcon, Truck } from 'lucide-react';
import { Label } from '../ui/label';
import STRINGS from '@/lib/strings';

const S = STRINGS.homepage.features;
const AppFeature = () => {
  return (
    <div className="w-full min-h-[480px] grid grid-cols-3 gap-20 px-40 py-20">
      {S.map((feat) => (
        <FeatureItem key={feat.title} {...feat} />
      ))}
    </div>
  );
};

interface FeatureItemProps {
  title: string;
  subTitle?: string;
  icon: LucideIcon;
}
const FeatureItem: React.FC<FeatureItemProps> = ({ title, subTitle, icon }) => {
  const Icon = icon;
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="p-3 rounded-full bg-gray-200">
        <Icon size={24} />
      </div>
      <Label className="text-lg font-semibold mt-6 mb-3">{title}</Label>
      <span className="text-gray-500">{subTitle}</span>
    </div>
  );
};

export default AppFeature;
