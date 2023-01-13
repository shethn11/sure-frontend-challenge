import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';
import { TPolicyholdersResponse } from '../../../../types/policyholder';
import { api } from '../../../apiClient';

const getPolicyholders: QueryFunction<
  TPolicyholdersResponse,
  QueryKey
> = async () => {
  return await api.get<TPolicyholdersResponse>('/policyholders');
};

export const usePolicyholdersQuery = () => {
  return useQuery(['policyholders'], getPolicyholders, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
