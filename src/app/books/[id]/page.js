"use client";

import { useFetch } from "@/hooks/useFetch";
import { useParams } from "next/navigation";

const BookDetails = () => {
  const { id } = useParams();
  const { data: books, loading, error } = useFetch("/data/BooksData.json");

  if (loading) {
    return (
      <div className=" -mt-16">
        <div className="h-[calc(100vh-240px)] bg-deepblue text-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  const book = books?.find((book) => book.id === parseInt(id));

  if (error) return <div>Error loading book details</div>;
  if (!book) return <div>Book not found</div>;

  return (
    <section className="-mt-16">
      <div className="bg-deepblue py-8 mb-5 text-white"></div>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Book Image */}
            <div className="lg:w-1/3">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Book Info */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
              <p className="text-2xl text-primary mb-4">By {book.author}</p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary">${book.price}</p>
              </div>
              <div className="prose max-w-none">
                <p>{book.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BookDetails;
