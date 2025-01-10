"use client";
import BooksCard from "@/components/shared/booksCard/booksCard";
import { useBooks } from "@/hooks/use-queries";
import Newsletter from "@/pages/home/newsletter/newsletter";

const Books = () => {
  const { data: books } = useBooks();
  return (
    <section className="-mt-16">
      <div className="flex bg-deepblue pt-32 pb-16 flex-col items-center font-english text-white">
        <h2 className="mb-4 text-center text-4xl lg:text-5xl font-bold">
          Book Store{" "}
        </h2>
        <hr className="w-10 h-0.5 bg-primary mb-8 lg:mb-14" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 w-11/12 lg:w-8/12 lg:mt-32 mx-auto">
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
