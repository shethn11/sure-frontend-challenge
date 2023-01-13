import { useMutation } from '@tanstack/react-query';
import {
  TPolicyholder,
  TPolicyholdersResponse,
} from '../../../../types/policyholder';
import { api } from '../../../apiClient';

const addPolicyholder = async (
  policyholder: TPolicyholder
): Promise<TPolicyholdersResponse> => {
  return await api.post('/policyholders', policyholder);
};

export const useAddPolicyholderMutation = () => {
  return useMutation(addPolicyholder);
};
