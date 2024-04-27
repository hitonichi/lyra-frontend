import Image from 'next/image';
import ProductCard from '../productCard';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import STRINGS from '@/lib/strings';

const S = STRINGS.homepage.featured;
const FeaturedProducts = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Label className="text-lg font-light">SHOP NOW</Label>
      <Label className="text-2xl font-semibold">Best Selling</Label>
      <div className="w-full pt-10 pb-20 px-40 mt-6 flex items-start justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="w-full bg-gradient-to-r from-gray-200 via-white to-white relative flex items-center justify-between px-20 min-h-[360px]">
        <div className="flex flex-col gap-2 justify-start items-start">
          <Label className="text-2xl font-bold">{S.title}</Label>
          <span>{S.subTitle}</span>
          <Button className="mt-8">
            <Link href="/products">{S.callToAction}</Link>
            <ChevronRight size={24} />
          </Button>
        </div>
        <Image className="mr-20" src={'/mock-product-img-2.png'} alt="featured-product" width={282} height={282} />
      </div>
      <div className="w-full pt-10 pb-20 px-40 mt-6 flex items-start justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
