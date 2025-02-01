"use client";
import TitleOne from "@/components/shared/titleOne/titleOne";
import { useFetch } from "@/hooks/useFetch";
import { FaUser } from "react-icons/fa6";

const BookReview = () => {
  const { data: books, loading, error } = useFetch("/data/BooksData.json");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading books</div>;

  return (
    <section className="w-11/12 mx-auto lg:container flex flex-col items-center">
      <TitleOne title={"বই রিভিউ"} />
      <div className="flex flex-wrap justify-center gap-14">
        {books?.slice(0, 4).map((book) => (
          <div
            key={book.id}
            style={{
              backgroundImage: `url(${book.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex flex-col gap-3 p-4 h-96 w-64 relative rounded shadow-md "
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b to-secondary from-white/50 transition-opacity duration-300 p-4 flex flex-col justify-end">
              <div>
                <p className="text-black font-bold">রিভিউ</p>
                <h2 className="text-xl font-bold">{book.title}</h2>
                <p className="text-black flex items-center gap-2 pb-3 text-sm font-bold">
                  {" "}
                  <FaUser className="text-xs" />
                  {book.author}
                </p>
                <p className="text-gray-700 line-clamp-3">{book.review}</p>
                <p className="text-gray-700 line-clamp-4 text-sm text-justify">
                  {book.shortDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookReview;
