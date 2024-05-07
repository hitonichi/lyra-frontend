import Image from 'next/image';
import { Label } from '../ui/label';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { FC } from 'react';

const ProductCard: FC<ProductData> = ({ _id, productName, price, quantity, images }) => {
  const isInStock = quantity != 0;
  const _img = images && images.length > 0 ? images[0] : undefined;

  return (
    <div className="w-fit p-4 mx-auto rounded flex flex-col items-start justify-evenly hover:bg-primary-foreground">
      <Link href={`/products/${_id}`}>
        <div className="max-w-[248px] max-h-[312px] overflow-hidden flex justify-center items-center bg-gray-50">
          {/* {img ? <div>...</div> : } */}
          <Image src={_img ? _img : '/mock-product-img.png'} width={248} height={312} alt="product-image" />
        </div>
        <div className="pt-4 pb-2">
          <Label className=" line-clamp-1 max-w-[248px]">{productName}</Label>
        </div>
        <div className="w-full flex justify-between items-center">
          <Badge variant={isInStock ? 'outline' : 'default'} className={!isInStock ? 'bg-accent text-black' : ''}>
            {isInStock ? 'IN STOCK' : 'SOLD OUT'}
          </Badge>
          <Label className="text-lg font-bold">$ {price}</Label>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
