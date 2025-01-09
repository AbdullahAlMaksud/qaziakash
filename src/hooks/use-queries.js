import { fetchBlogsPosts, fetchBooks } from "@/lib/api-functions";
import { useQuery } from "@tanstack/react-query";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogsPosts,
    staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
  });
};

export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
    staleTime: 5 * 60 * 1000,
  });
};
