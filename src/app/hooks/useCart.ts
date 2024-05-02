import { CartContext } from '@/contexts/CartContext';
import React from 'react';

export const useCart = () => {
  const cart = React.useContext(CartContext);
  if (!cart) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cart;
};
