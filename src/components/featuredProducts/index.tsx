import Image from 'next/image';
import ProductCard from '../productCard';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import STRINGS from '@/lib/strings';

const BEST_SELLING: ProductData[] = [
  {
    _id: '1',
    productName: 'Product 1',
    price: 100,
    quantity: 10,
    overallRating: 4.5,
    description: 'Product 1 description',
    category: [{ name: 'cleanser' }],
    images: [
      'https://media.hcdn.vn/catalog/product/g/o/google-shopping-mat-na-ngu-moi-laneige-huong-qua-mong-mini-8g-1_img_358x358_843626_fit_center.jpg',
    ],
  },
  {
    _id: '2',
    productName: 'Product 2',
    price: 200,
    quantity: 5,
    overallRating: 4.5,
    description: 'Product 2 description',
    category: [{ name: 'cleanser' }],
    images: [
      'https://media.hcdn.vn/catalog/product/g/o/google-shopping-mat-na-ngu-laneige-cung-cap-nuoc-25ml-1676626146_img_358x358_843626_fit_center.jpg',
    ],
  },
  {
    _id: '3',
    productName: 'Product 3',
    price: 300,
    quantity: 0,
    overallRating: 4.5,
    description: 'Product 3 description',
    category: [{ name: 'cleanser' }],
    images: [
      'https://media.hcdn.vn/catalog/product/g/o/google-shopping-sua-rua-mat-cerave-sach-sau-cho-da-thuong-den-da-dau-473ml-1695090638_img_358x358_843626_fit_center.jpg',
    ],
  },
  {
    _id: '4',
    productName: 'Product 4',
    price: 400,
    quantity: 10,
    overallRating: 4.5,
    description: 'Product 4 description',
    category: [{ name: 'cleanser' }],
    images: [
      'https://media.hcdn.vn/catalog/product/g/o/google-shopping-kem-duong-ngan-ngua-lao-hoa-quang-tham-bong-mat-meishoku-30g_img_358x358_843626_fit_center.jpg',
    ],
  },
];

const S = STRINGS.homepage.featured;
const FeaturedProducts = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Label className="text-lg font-light">SHOP NOW</Label>
      <Label className="text-2xl font-semibold">Best Selling</Label>
      <div className="w-full pt-10 pb-20 px-40 mt-6 flex items-start justify-between">
        {BEST_SELLING.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
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
        {BEST_SELLING.reverse().map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
