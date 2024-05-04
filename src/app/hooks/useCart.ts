import { CartContext } from '@/contexts/CartContext';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCart } from '../services/cart';

export const useCart = () => {
  const cart = React.useContext(CartContext);

  if (!cart) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cart;
};

export function useCartQuery() {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => getCart(),
  });
}
