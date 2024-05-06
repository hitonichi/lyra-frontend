'use server';
import { BE_ENDPOINT, buildHeaders } from '.';

export const getCart = async () => {
  const headers = await buildHeaders();
  console.log('[GET CART] check headers', headers);
  const response = await fetch('https://cosmetic-backend.vercel.app/cart', {
    headers,
  });
  return response.json();
};

export const addToCart = async (cart: Cart, productId: string, quantity: number) => {
  // const headers = await buildHeaders();
  // const response = await fetch('https://cosmetic-backend.vercel.app/cart', {
  //   method: 'POST',
  //   headers,
  //   body: JSON.stringify({ productId, quantity }),
  // });
  // return response.json();
};
