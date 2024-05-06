import { useQuery } from '@tanstack/react-query';
import { getDistricts } from '../services/address';

export function useDistrict() {
  return useQuery({
    queryKey: ['districts'],
    queryFn: () => getDistricts(),
  });
}
