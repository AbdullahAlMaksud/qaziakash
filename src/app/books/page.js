"use client";
import WideBooksCard from "@/components/shared/wideBooksCard/WideBooksCard";
import { useFetch } from "@/hooks/useFetch";

const Books = () => {
  const { data: books, loading, error } = useFetch("/data/BooksData.json");
  const sortedBooks = books?.sort((a, b) => {
    return new Date(b.year) - new Date(a.year);
  });

  return (
    <section className="-mt-16 pt-32 pb-16">
      <div className="grid grid-cols-2 gap-4 w-11/12  mx-auto">
        {sortedBooks?.map((book) => (
          <div key={book.id}>
            <WideBooksCard book={book} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
