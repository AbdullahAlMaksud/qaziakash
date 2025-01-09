"use client";

import { useEffect, useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/BooksData.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  return { books };
};
