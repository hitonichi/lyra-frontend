'use client';
import { FC } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import Image from 'next/image';

interface CartProps {
  product: ProductData;
}
const CartEntry: FC<CartProps> = ({ product }) => {
  const { productName, price, quantity } = product;

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <div className="flex items-center space-x-2">
        <div className="w-16 h-16 bg-gray-100 rounded-md">
          <Image src="/mock-product-img.png" width={64} height={64} alt="product-image" />
        </div>
        <div>
          <h3 className="text-sm font-semibold">{productName}</h3>
          {/* <p className="text-xs text-gray-500">Product Description</p> */}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size={'sm'}>
          -
        </Button>
        <span className="text-sm font-semibold">{quantity}</span>
        <Button variant="outline" size={'sm'}>
          +
        </Button>
        <Button variant={'destructive'} size={'sm'} className="ml-4">
          <X size={12} />
        </Button>
      </div>
    </div>
  );
};

export default CartEntry;
