import axios from "axios";

export const axiosInstance = axios.get({
  baseURL: "/data",
  timeout: 5000,
});
