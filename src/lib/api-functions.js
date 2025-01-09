import { axiosInstance } from './axios-config';

export const fetchBlogsPosts = async () => {
  const { data } = await axiosInstance.get('/BlogsData.json');
  return data;
};

export const fetchBooks = async () => {
  const { data } = await axiosInstance.get('/BooksData.json');
  return data;
};
