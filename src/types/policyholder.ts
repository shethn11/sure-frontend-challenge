export type TPolicyholdersResponse = {
  policyHolders: TPolicyholder[];
};

export type TPolicyholder = {
  name: string;
  age: number;
  address: TPolicyholderAddress;
  phoneNumber: string;
  isPrimary: boolean;
};

export type TPolicyholderAddress = {
  line1: string;
  line2: string | undefined;
  city: string;
  state: string;
  postalCode: string;
};
