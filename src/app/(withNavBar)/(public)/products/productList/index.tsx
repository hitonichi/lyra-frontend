'use client';

import { useProducts } from '@/app/hooks/useProducts';
import ProductCard from '@/components/productCard';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const ProductList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      console.log('curr params', params.values());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const { data, error, isLoading } = useProducts(searchParams);
  const products = data as unknown as ProductData[];

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h2>{error.message}</h2>;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start self-center align-middle justify-stretch">
        <div className="col-span-full px-6 mb-2 flex justify-end items-center">
          {/* <Label>Showing 1-9 of 36 results</Label> */}
          <div>
            <Select
              onValueChange={(value) => {
                router.push(pathname + '?' + createQueryString('sort', value));
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="ORDER BY" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="latest">Newest</SelectItem>
                  <SelectItem value="priceAsc">Price low to high</SelectItem>
                  <SelectItem value="priceDesc">Price high to low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* < */}
          </div>
        </div>
        {products.map((prod, id) => (
          <ProductCard key={id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
