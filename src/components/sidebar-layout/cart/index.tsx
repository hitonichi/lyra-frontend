'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'outline'} className="p-1.5 rounded-full h-fit" onClick={() => setOpen(!open)}>
            <ShoppingCart size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="flex flex-col w-full gap-2 max-h-[360px]">
            <Label className="text-xl font-bold">Cart</Label>
            <div className="flex grow flex-col overflow-y-auto gap-2">
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
              <p>This is an item.</p>
            </div>
            <Link href={'/cart'}>
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
