import { useQuery } from '@tanstack/react-query';
import { getWards } from '../services/address';

export function useWards() {
  return useQuery({
    queryKey: ['wards'],
    queryFn: () => getWards(),
  });
}
