"use client";
import BooksCard from "@/components/shared/booksCard/booksCard";
import { useFetch } from "@/hooks/useFetch";
import Newsletter from "@/pages/home/newsletter/newsletter";

const Books = () => {
  const { data: books, loading, error } = useFetch("/data/BooksData.json");
  return (
    <section className="-mt-16">
      <div className="bg-deepblue pt-16 pb-8 lg:py-32 text-white">
        <div className="flex flex-col items-center font-english">
          <h2 className="mb-4 text-center text-3xl lg:text-5xl font-bold">
            All Books
          </h2>
          <hr className="w-14 h-0.5 bg-primary mb-4 lg:mb-4" />
          <p className="text-center w-11/12 lg:w-1/3 mx-auto">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:flex flex-wrap justify-center gap-4 w-11/12 lg:w-8/12 lg:mt-32 mx-auto">
        {books?.map((book) => (
          <div key={book.id} className="w-72 lg:w-60">
            <BooksCard book={book} />
          </div>
        ))}
      </div>

      <Newsletter />
    </section>
  );
};

export default Books;
