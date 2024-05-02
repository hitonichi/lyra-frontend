'use client';

import { useCart } from '@/app/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [cart] = useCart();

  console.log('[SIDEBAR LAYOUT]', cart);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'} className="relative p-2 rounded-full h-fit" onClick={() => setOpen(!open)}>
            <ShoppingCart size={16} />
            {cart.products.length != 0 && (
              <Label className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-white py-1 px-2">
                {cart.products.length}
              </Label>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="flex flex-col w-full gap-2 max-h-[360px] min-h-[240px]">
            <Label className="text-xl font-bold mb-2">Cart</Label>
            <div className="flex grow flex-col overflow-y-auto gap-3">
              {cart.products.map((product) => (
                <div key={product._id} className="flex justify-between items-center">
                  <Label className="font-semibold">{product.productName}</Label>
                  <div className="flex gap-2">
                    <Label className="font-semibold">$ {product.price}</Label>
                    <Label> x {product.quantity}</Label>
                  </div>
                </div>
              ))}
            </div>
            <Link href={'/cart'} className="mt-6">
              <Button variant={'default'} className="w-full">
                View and Checkout
              </Button>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Cart;
