'use client';

import { useProductDetails } from '@/app/hooks/useProductsDetails';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Info, Loader2, Share2, Star } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function ProductPage({ params }: { params: { productId: string } }) {
  const { data, error, isLoading } = useProductDetails(params.productId);

  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h2>{error.message}</h2>;

  if (!data || !('productDetail' in data)) return <h2>No data</h2>;
  const productDetails = data?.productDetail;

  console.log('Product detail:', data, productDetails);
  return (
    <div className="w-full min-h-[100vh] px-20 py-10">
      <OverviewSection {...productDetails} />
      <DescriptionAndReviews {...productDetails} />
    </div>
  );
}

const cartFormSchema = z.object({
  quantity: z.string(),
});

export type TCartFormSchema = z.infer<typeof cartFormSchema>;

const OverviewSection: FC<ProductData> = ({ productName, price, quantity, overallRating }) => {
  const isInStock = quantity != 0;
  const hasReview = overallRating != 0;

  const form = useForm<TCartFormSchema>({
    resolver: zodResolver(cartFormSchema),
    defaultValues: {
      quantity: '1',
    },
  });

  const { formState, control, handleSubmit, setError, reset } = form;

  const onSubmit = async (value: TCartFormSchema) => {
    console.log('Form data:', value);
  };

  return (
    <div className="w-full flex justify-between items-stretch gap-[120px]">
      <div className="relative w-[540px] h-[540px] overflow-hidden flex justify-center items-center bg-gray-50">
        <Image src="/mock-product-img.png" fill alt="product-image" />
      </div>
      <div className="relative min-w-[40%] self-stretch flex flex-col items-start justify-between">
        <div className="w-full h-full flex flex-col items-start justify-start">
          <div className="w-full flex justify-between items-center">
            <Label className="text-xl font-bold">{productName}</Label>
            <Share2 size={18} />
          </div>
          <div className="w-full flex mt-3 gap-2">
            {hasReview && (
              <Badge variant={'default'} className="text-black bg-accent">
                <Star size={16} />
                {Math.round(overallRating * 100) / 100}
              </Badge>
            )}
            <Badge variant={isInStock ? 'outline' : 'default'} className={!isInStock ? 'bg-accent text-black' : ''}>
              {isInStock ? 'IN STOCK' : 'SOLD OUT'}
            </Badge>
          </div>
          <Label className="mt-6 text-xl font-semibold">$ {price}</Label>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <FormField
                  control={control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem className="space-y-1 mt-2">
                      <FormLabel className="pl-1 font-semibold text-sm text-gray-500">QUANTITY:</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full space-y-2">
                {formState.isSubmitting ? (
                  <Button disabled className="w-full">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Add to Cart
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

const DescriptionAndReviews: FC<ProductData> = () => {
  return (
    <Tabs defaultValue="account" className="mt-6 w-full grid grid-cols-12 gap-6">
      <TabsList className="col-span-3 !flex flex-col justify-start h-full min-h-[80vh] bg-transparent">
        <TabsTrigger
          className="w-full flex items-center py-3 data-[state=active]:bg-accent justify-start"
          value="account"
        >
          <Info size={18} className="mr-2" />
          <Label className="font-semibold">Details</Label>
        </TabsTrigger>
        <TabsTrigger
          className="w-full flex items-center py-3 data-[state=active]:bg-accent justify-start"
          value="password"
        >
          <Star size={18} className="mr-2" />
          <Label className="font-semibold">Reviews</Label>
        </TabsTrigger>
      </TabsList>
      <div className="col-span-9">
        <TabsContent value="account">
          <Label className="text-lg font-bold">Details</Label>
          <p className="mt-6 text-gray-500">
            Elevate your everyday style with our Men&rsquo;s Black T-Shirts, the ultimate wardrobe essential for modern
            men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a
            must-have addition to your collection. The classic black color never goes out of style. Whether you&rsquo;re
            dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice,
            effortlessly complementing any outfit.
          </p>
          <ul className="mt-6 text-gray-500">
            <li> - Premium Quality</li>
            <li> - Versatile Wardrobe Staple</li>
            <li> - Available in Various Sizes</li>
            <li> - Tailored Fit</li>
          </ul>
        </TabsContent>
        <TabsContent value="password">
          <Label className="text-lg font-bold">Reviews</Label>
        </TabsContent>
      </div>
    </Tabs>
  );
};
