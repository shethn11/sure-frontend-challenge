import axios, { AxiosRequestConfig } from 'axios';

const apiConfig: AxiosRequestConfig = {
  baseURL:
    'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api',
};

const axiosInstance = axios.create(apiConfig);

export const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<T>(url, config);
    return response.data;
  },
  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    const response = await axiosInstance.post<T>(url, data, config);
    return response.data;
  },
};
