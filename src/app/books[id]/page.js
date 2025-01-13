"use client";
import { useBook } from "@/hooks/use-queries";
import { useParams } from "next/navigation";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book } = useBook(id);

  console.log(book);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Book Image */}
          <div className="lg:w-1/3">
            <img
              src={book?.image}
              alt={book?.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Book Info */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{book?.title}</h1>
            <p className="text-2xl text-primary mb-4">By {book?.author}</p>
            <div className="mb-6">
              <p className="text-3xl font-bold text-primary">${book?.price}</p>
            </div>
            <div className="prose max-w-none">
              <p>{book?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
