import { useQuery } from 'react-query';
import { getPublicVariables } from '../contract/interact';
import { queryKeys } from '@/src/queryKeys';

export function usePublicContractData() {
  return useQuery(queryKeys.publicContractData, () => getPublicVariables(), {});
}
