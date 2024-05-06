'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { navTitleToSearchParam } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CATEGORIES = [
  {
    groupLabel: 'Makeup',
    items: ['Eye', 'Lip', 'Cheek'],
  },
  {
    groupLabel: 'Skincare',
    items: ['Moistrurizers', 'Cleansers', 'Treatments', 'Masks', 'Eye Care', 'Sunscreen'],
  },
];

const filterFormSchema = z.object({
  category: z.string().min(0),
  minPrice: z.string(),
  maxPrice: z.string(),
});

export type TFilterFormSchema = z.infer<typeof filterFormSchema>;

const ProductFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (values: { key: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams.toString());
      values.forEach(({ key, value }) => {
        if (value == '') params.delete(key);
        else params.set(key, value);
      });
      return params.toString();
    },
    [searchParams],
  );

  const form = useForm<TFilterFormSchema>({
    resolver: zodResolver(filterFormSchema),
    defaultValues: {
      category: '',
      minPrice: '',
      maxPrice: '',
    },
  });

  const { formState, control, handleSubmit, setError, reset } = form;

  const onSubmit = async (value: TFilterFormSchema) => {
    console.log('Form data:', value);
    // Object.keys(value).forEach((key) => {
    //   router.push(pathname + '?' + createQueryString(key, value[key as keyof TFilterFormSchema]));
    // });
    const params = Object.keys(value).reduce(
      (acc, ele) => {
        // if (value[ele as keyof TFilterFormSchema] != '')
        acc.push({ key: ele, value: value[ele as keyof TFilterFormSchema] });
        return acc;
      },
      [] as { key: string; value: string }[],
    );
    console.log('Params', params);
    router.push(pathname + '?' + createQueryString(params));
    // params.forEach(({ key, value }) => {
    //   router.push(pathname + '?' + createQueryString(key, value));
    // });
  };

  return (
    <Card className="sticky">
      <CardContent className="p-4 pt-2 space-y-3">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField
              control={control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Category</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="mt-2 space-y-2 pl-1"
                    >
                      {CATEGORIES.map(({ groupLabel, items }) => (
                        <div key={groupLabel} className="flex flex-col gap-2">
                          <Label className="text-sm font-semibold">{groupLabel}</Label>
                          {items.map((value) => {
                            const id = groupLabel + value;
                            return (
                              <FormItem key={id} className="flex items-center space-x-2 overflow-hidden">
                                <FormControl>
                                  <RadioGroupItem value={navTitleToSearchParam(value)} id={id} />
                                </FormControl>
                                <FormLabel className="text-sm !m-0 !ml-1" htmlFor={id}>
                                  {value}
                                </FormLabel>
                              </FormItem>
                            );
                          })}
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormLabel className="font-semibold mt-2">Price</FormLabel>
              <FormField
                control={control}
                name="minPrice"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="pl-1 font-semibold">From:</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="maxPrice"
                render={({ field }) => (
                  <FormItem className="space-y-1 mt-2">
                    <FormLabel className="pl-1 font-semibold">To:</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full mt-2 space-y-2">
              {formState.isSubmitting ? (
                <Button disabled className="w-full">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Filter
                </Button>
              )}
              <Button onClick={() => reset()} variant={'outline'} className="w-full">
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProductFilter;
