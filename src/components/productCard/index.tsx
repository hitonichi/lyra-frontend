import Image from 'next/image';
import { Label } from '../ui/label';
import Link from 'next/link';
import { Badge } from '../ui/badge';

const ProductCard = () => {
  return (
    <Link href={'/products'}>
      <div className="p-4 rounded flex flex-col items-start justify-start hover:bg-primary-foreground">
        <div className="w-[248px] h-[312px] overflow-hidden flex justify-center items-center bg-gray-50">
          <Image src="/mock-product-img.png" width={248} height={312} alt="product-image" />
        </div>
        <Label className="pt-6 pb-3">Product name</Label>
        <div className="w-full flex justify-between items-center">
          <Badge variant={'outline'}>IN STOCK</Badge>
          <Label className="text-lg font-bold">$ 27.00</Label>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
