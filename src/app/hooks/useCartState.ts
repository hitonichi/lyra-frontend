import { useState } from 'react';

export const useCartState = (initialCart: Cart) => useState<Cart>(initialCart);
