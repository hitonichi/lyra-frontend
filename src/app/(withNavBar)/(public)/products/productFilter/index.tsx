'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Label } from '@radix-ui/react-label';

const ProductFilter = () => {
  return (
    <Card>
      <CardHeader>
        <Label>Categories</Label>
      </CardHeader>
      <CardContent>
        <Label className="font-semibold">Makeups</Label>
        <Separator />
        <ul className="mt-2 flex flex-col gap-3">
          <li>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox id="1" />
              <label
                htmlFor="1"
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Eye
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox id="1" />
              <label
                htmlFor="1"
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lip
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox id="1" />
              <label
                htmlFor="1"
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cheek
              </label>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProductFilter;
