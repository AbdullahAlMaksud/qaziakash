import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/data',
  timeout: 5000,
});
