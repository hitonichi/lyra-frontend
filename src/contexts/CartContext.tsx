'use client';

import { useCartState } from '@/app/hooks/useCartState';
import { createContext } from 'react';

export const CartContext = createContext<ReturnType<typeof useCartState> | null>(null);

export const CartProvider = ({ cart: initialCart, children }: { cart: Cart; children: React.ReactNode }) => {
  const [cart, setCart] = useCartState(initialCart);

  return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>;
};
