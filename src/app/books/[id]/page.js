"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";

const BookDetails = () => {
  const { id } = useParams();
  const { data: books, loading, error } = useFetch("/data/BooksData.json");

  const [cartItemCount, setCartItemCount] = useState(0);

  const increaseCount = () => {
    setCartItemCount((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  };

  const decreaseCount = () => {
    setCartItemCount((prev) => {
      const newCount = Math.max(0, prev - 1);
      return newCount;
    });
  };

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
      <div className="bg-deepblue py-8 text-white"></div>

      <section className="w-11/12 mt-20 lg:container mx-auto px-4">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Book Image */}
            <div className="lg:w-2/6 flex items-center justify-center py-10 bg-gray-100">
              <Image
                width={300}
                height={400}
                src={book?.cover}
                alt={book.title}
                className="h-80 w-52 object-cover shadow-lg"
              />
            </div>

            {/* Book Info */}
            <div className="lg:w-4/6">
              <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
              <p className="text-3xl font-bold text-primary font-['kalpurush']">
                ৳ {book.price}
              </p>

              <p className="">{book.description}</p>

              <div className="flex items-center gap-8">
                <div className="">
                  <p className="font-bangla">প্রকাশক</p>
                  <p className="font-bangla">পৃষ্ঠা</p>
                  <p className="font-bangla">ভাষা</p>
                  <p className="font-bangla">ISBN</p>
                  <p className="font-bangla">আকার</p>
                </div>
                <div className="">
                  <p className="font-bangla">:</p>
                  <p className="font-bangla">:</p>
                  <p className="font-bangla">:</p>
                  <p className="font-bangla">:</p>
                  <p className="font-bangla">:</p>
                </div>
                <div className="">
                  <p className="font-bangla">{book.publisher}</p>
                  <p className="font-['kalpurush']">{book.pages}</p>
                  <p className="font-bangla">{book.language || "Not Found"}</p>
                  <p className="font-bangla">{book.ISBN}</p>
                  <p className="font-bangla">{book.size}</p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-8">
                <div className="grid grid-cols-3 items-center gap-1 border p-0.5 w-fit border-primary">
                  <Button
                    onClick={decreaseCount}
                    className="p-0 bg-secondary min-w-full rounded-none shadow-none"
                  >
                    -
                  </Button>
                  <Input
                    value={cartItemCount}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 0) {
                        setCartItemCount(value);
                      }
                    }}
                    type="text"
                    min="0"
                    className="text-center p-0 w-10 px-0 flex font-['kalpurush']  shadow-none border-none"
                  />
                  <Button
                    onClick={increaseCount}
                    className="p-0 px-4 bg-secondary min-w-full rounded-none shadow-none col-span-1"
                  >
                    +
                  </Button>
                </div>

                <div className="w-full p-0.5 bg-primary flex items-center justify-center">
                  <Button
                    onClick={increaseCount}
                    className="font-bangla font-bold rounded-none shadow-none w-full"
                  >
                    <FaCartPlus /> কার্টে যোগ করুন
                  </Button>
                </div>
              </div>
            </div>

            {/* Book Info */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BookDetails;
