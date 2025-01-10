import { fetchAuthor, fetchBlogsPosts, fetchBooks } from "@/lib/api-functions";
import { useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogsPosts,
    staleTime: 5 * 60 * 1000,
  });
};
export const useAuthor = () => {
  return useQuery({
    queryKey: ["author"],
    queryFn: fetchAuthor,
    staleTime: 5 * 60 * 1000,
  });
};
