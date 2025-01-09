export const fetchBlogsPosts = async () => {
  const response = await fetch("/BlogsData.json");
  return response.json();
};

export const fetchBooks = async () => {
  const response = await fetch("/BooksData.json");
  return response.json();
};
