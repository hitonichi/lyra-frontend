import { useQuery } from '@tanstack/react-query';
import { getCities } from '../services/address';

export function useCities() {
  return useQuery({
    queryKey: ['cities'],
    queryFn: () => getCities(),
  });
}
