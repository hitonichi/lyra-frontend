'use client';

import { useCart, useCartQuery } from '@/app/hooks/useCart';
import { useCities } from '@/app/hooks/useCities';
import { useDistrict } from '@/app/hooks/useDistrict';
import { useWards } from '@/app/hooks/useDistrict copy';
import CartEntry from '@/components/cartEntry';
import PageHeader from '@/components/pageHeader';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const checkoutFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Receiver name cannot be empty',
  }),
  phone: z.string().min(1, {
    message: 'Phone number cannot be empty',
  }),
  addressDetails: z.string().min(1, {
    message: 'Street address cannot be empty',
  }),
  province: z.string().min(1, {
    message: 'City cannot be empty',
  }),
  district: z.string().min(1, {
    message: 'District cannot be empty',
  }),
  ward: z.string().min(1, {
    message: 'Ward cannot be empty',
  }),
  payment: z.string().min(1),
});

export type TCheckoutFormSchema = z.infer<typeof checkoutFormSchema>;

export default function CheckoutPage() {
  const [cart, setCart] = useCart();
  const { data, error } = useCartQuery();
  const { data: cityData, error: cityError } = useCities();
  const { data: districtData, error: districtError } = useDistrict();
  const { data: wardData, error: wardError } = useWards();

  if (error) console.log('[ERR cart]: ', error);

  const subtotal =
    cart.products.length !== 0 ? cart.products.reduce((acc, product) => acc + product.price * product.quantity, 0) : 0;
  const SHIPPING_FEE = 3;

  const form = useForm<TCheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      addressDetails: '',
      province: '',
      district: '',
      ward: '',
      payment: '',
    },
  });

  const { formState, control, handleSubmit, setError, reset } = form;

  const onSubmit = async (value: TCheckoutFormSchema) => {
    console.log('Form data:', value);
  };

  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/paypal/createorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_price: 0.05,
          user_id: '123',
        }),
      });
      return response;
    },
  });

  const createPaypalOrder = async () => {
    const response = await createMutation.mutateAsync();
    console.log('Response: ', response);
    const oData = await response.json();
    console.log('Order Data: ', oData);
    // return '123123';
    return oData.data.order.order_id + '';
  };

  // onApprove={async (data, actions) => {
  //   // const response = await paypalCaptureOrder(data.orderID);
  //   // return true;
  // }

  if (!cart || !cart.products || cart.products.length === 0)
    return (
      <div className="w-full min-h-[100vh] ">
        <PageHeader title="Checkout" />
        <div className="w-full flex justify-between px-20 py-6 gap-20">
          <div className="w-full">
            <div className="flex flex-col ">
              <p>Your cart is empty, add something to checkout.</p>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="w-full min-h-[100vh] ">
      <PageHeader title="Checkout" />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex justify-start items-start px-20 py-6 gap-20">
          <div className="grid grid-cols-6 w-full gap-x-8 gap-y-4 justify-start items-start">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1 col-span-3">
                  <FormLabel className="font-semibold">Receiver name</FormLabel>
                  <FormControl>
                    <Input placeholder={'Enters receiver name'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-1 col-span-3">
                  <FormLabel className="font-semibold">Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder={'Enter phone number'} {...field} />
                  </FormControl>
                  <FormMessage />
                  {/* {formState.errors.password && <FormMessage>{formState.errors.password.message}</FormMessage>} */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="addressDetails"
              render={({ field }) => (
                <FormItem className="space-y-1 col-span-6">
                  <FormLabel className="font-semibold">Home adress</FormLabel>
                  <FormControl>
                    <Input placeholder={'Enter delivery address, i.e. "18 Nguyen Thi Minh Khai St." '} {...field} />
                  </FormControl>
                  <FormMessage />
                  {/* {formState.errors.password && <FormMessage>{formState.errors.password.message}</FormMessage>} */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="province"
              render={({ field }) => (
                <FormItem className="space-y-1 col-span-2">
                  <FormLabel className="font-semibold">City</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cityData?.map(({ id, name, slug }) => (
                        <SelectItem key={id} value={slug}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                  {/* {formState.errors.password && <FormMessage>{formState.errors.password.message}</FormMessage>} */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="district"
              render={({ field }) => (
                <FormItem className="space-y-1 col-span-2">
                  <FormLabel className="font-semibold">District</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose district" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {districtData?.map(({ id, name }) => (
                        <SelectItem key={id} value={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                  {/* {formState.errors.password && <FormMessage>{formState.errors.password.message}</FormMessage>} */}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="ward"
              render={({ field }) => (
                <FormItem className="space-y-1 col-span-2">
                  <FormLabel className="font-semibold">Ward</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose ward" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {wardData?.map(({ id, name }) => (
                        <SelectItem key={id} value={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                  {/* {formState.errors.password && <FormMessage>{formState.errors.password.message}</FormMessage>} */}
                </FormItem>
              )}
            />
          </div>
          {/* <div className="w-full space-y-2">
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
              </div> */}
          <Card className="w-96 min-w-[30%]">
            <CardHeader className="text-xl font-semibold">Your Order</CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 justify-between">
                <div className="col-span-2 mb-4 flex justify-start gap-2">
                  {cart.products.map((product) => (
                    <div key={product._id} className="flex justify-between items-center rounded-full bg-gray-100 gap-1">
                      <Avatar>
                        <AvatarImage src="/mock-product-img.png" alt="product-img" />
                      </Avatar>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-start items-start">
                  <div>Subtotal</div>
                  <div>Shipping</div>
                  <div>Tax</div>
                </div>
                <div className="flex flex-col justify-start items-end font-semibold">
                  <div>$ {subtotal}</div>
                  <div>$ {SHIPPING_FEE}</div>
                  <div>$ {subtotal * 0.08}</div>
                </div>
                <Separator className="col-span-2 my-4" />
                <Label className="font-semibold">Total</Label>
                <div className="flex flex-col justify-start items-end font-semibold">
                  <Label className="font-semibold">$ {subtotal * 1.08 + SHIPPING_FEE}</Label>
                </div>
                <Link href={'/checkout'} className="col-span-2 w-full mt-4">
                  <Button className="w-full">Checkout</Button>
                </Link>
                <div className="mt-4 w-full col-span-2">
                  <PayPalScriptProvider
                    options={{
                      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
                      currency: 'USD',
                      intent: 'capture',
                    }}
                  >
                    <PayPalButtons
                      style={{
                        color: 'gold',
                        shape: 'rect',
                        label: 'pay',
                        height: 50,
                      }}
                      className="w-full"
                      createOrder={createPaypalOrder}
                      onApprove={async () => {
                        setCart({ products: [] });
                        router.push('/checkout/success');
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
