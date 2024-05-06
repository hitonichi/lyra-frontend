import { useQuery } from '@tanstack/react-query';
import { getProductDetails } from '../services';

export function useProductDetails(productId: string) {
  return useQuery({
    queryKey: ['productsDetails', { productId }],
    queryFn: () => getProductDetails({ productId }),
  });
}
