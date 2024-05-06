'use client';

import { useCart, useCartQuery } from '@/app/hooks/useCart';
import CartEntry from '@/components/cartEntry';
import PageHeader from '@/components/pageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function CartPage() {
  const [cart, setCart] = useCart();
  const { data, error } = useCartQuery();

  if (error) console.log('[ERR cart]: ', error);

  console.log('[RQ cart]: ', data);

  const subtotal =
    cart.products.length !== 0 ? cart.products.reduce((acc, product) => acc + product.price * product.quantity, 0) : 0;
  const SHIPPING_FEE = 3;

  const updateQuantity = (productId: string, quantity: number) => {
    const newCart: Cart = {
      ...cart,
      products: cart.products.map((product) => (product._id === productId ? { ...product, quantity } : product)),
    };
    setCart(newCart);
  };

  const removeFromCart = (productId: string) => {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
      const newCart: Cart = {
        ...cart,
        products: cart.products.filter((product) => product._id !== productId),
      };
      setCart(newCart);
    }
  };

  return (
    <div className="w-full min-h-[100vh] ">
      <PageHeader title="Cart" />
      <div className="w-full flex justify-between px-20 py-6 gap-20">
        <div className="w-full">
          <Label className="text-xl font-semibold">Your cart</Label>
          <Separator className="mt-4 mb-8" />
          <div className="flex flex-col ">
            {cart.products.length === 0 && <p>Your cart is empty</p>}
            {cart.products.length !== 0 &&
              cart.products.map((product) => (
                <CartEntry
                  key={product._id}
                  product={product}
                  updateQuantity={updateQuantity}
                  removeAction={removeFromCart}
                />
              ))}
          </div>
        </div>
        {cart.products.length !== 0 && (
          <Card className="w-96 min-w-[30%]">
            <CardHeader className="text-xl font-semibold">Order Summary</CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 justify-between">
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
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
