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
