import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../services';

export function useProducts(searchParams: URLSearchParams) {
  return useQuery({
    queryKey: ['products', searchParams.toString()],
    queryFn: () => getProducts(searchParams),
  });
}
