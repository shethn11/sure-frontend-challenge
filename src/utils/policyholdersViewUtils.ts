import { TPolicyholder, TPolicyholderAddress } from '../types/policyholder';

export const policyholderRowKeyTitle: {
  [key in keyof TPolicyholder]: string;
} = {
  name: 'Name',
  age: 'Age',
  address: 'Address',
  phoneNumber: 'Phone number',
  isPrimary: 'Primary policyholder?',
};

export const getPolicyholderTableRows = (
  policyholders: TPolicyholder[] | undefined
) => {
  if (!policyholders) return [];

  return policyholders.map((ph: TPolicyholder) => {
    return Object.keys(policyholderRowKeyTitle).map((key) => {
      const value = getPolicyholderRowValue(key, ph);
      return {
        key: policyholderRowKeyTitle[key as keyof TPolicyholder],
        value: value,
      };
    });
  });
};

export const getPolicyholderRowValue = (key: string, ph: TPolicyholder) => {
  if (key === 'address') {
    return formatAddress(
      ph[key as keyof TPolicyholder] as TPolicyholderAddress
    );
  } else if (key === 'isPrimary') {
    return ph[key as keyof TPolicyholder] ? 'Yes' : 'No';
  } else {
    return ph[key as keyof TPolicyholder] as string | number;
  }
};

const formatAddress = (addressToFormat: TPolicyholderAddress) => {
  return `${addressToFormat['line1']} ${addressToFormat['line2']}, ${addressToFormat['city']}, ${addressToFormat['state']}, ${addressToFormat['postalCode']}`;
};
