import STRINGS from '@/lib/strings';
import Link from 'next/link';

const S = STRINGS.homepage.promotion;

const PromotionBanner = () => (
  <div className="w-full text-center font-semibold text-sm py-1 bg-primary text-white">
    {S.title}
    <Link href="/products" className="ml-1 underline">
      {S.callToAction}
    </Link>
  </div>
);

export default PromotionBanner;
