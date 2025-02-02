"use client";
import TitleOne from "@/components/shared/titleOne/titleOne";
import { useFetch } from "@/hooks/useFetch";
// import { useBooks } from "@/hooks/services/booksData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Books = () => {
  const { data: books, loading, error } = useFetch("/data/BooksData.json");
  const [grid, setGrid] = useState(true);
  console.log(books);

  const handleGrid = () => {
    setGrid(!grid);
  };

  console.log(grid);
  return (
    <section className="bg-lightblue font-english mx-auto">
      <section className="py-8 lg:py-32 w-11/12 md:container flex flex-col justify-center items-center mx-auto">
        <TitleOne title={"প্রকাশিত নতুন বই"} />

        {/* Books Gallery */}
        <div className="flex flex-col lg:flex-row font-bangla gap-2">
          {books?.slice(3).map((book) => (
            <div key={book.id} className="flex gap-4">
              <div>
                <Image
                  unoptimized="true"
                  width={100}
                  height={100}
                  className="w-40 lg:min-w-52 lg:min-h-72 object-cover"
                  src={book.cover}
                  alt={book.title}
                />
              </div>

              <div className="flex w-40 lg:max-w-52 flex-col justify-center">
                <h2 className="font-bangla  text-deepblue text-2xl font-bold truncate">
                  {book.title}
                </h2>
                <p className="pt-2 lg:hidden text-gray-500 text-sm">
                  {book.description.split(" ")?.slice(0, 5).join(" ")}...
                </p>
                <p className="hidden lg:block pt-2 text-gray-500 text-sm">
                  {book.description.split(" ")?.slice(0, 18).join(" ")}...
                </p>
                <div className="pt-4  flex gap-8">
                  <div className="flex items-start gap-2">
                    <span className="min-w-4 max-w-min min-h-4 rounded-full bg-primary"></span>
                    <p>
                      <span className="font-bold text-lg text-deepblue">
                        পৃষ্ঠা:
                      </span>
                      <br />
                      <span className="font-['kalpurush'] text-gray-500">
                        {book.pages}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="min-w-4 max-w-min min-h-4 rounded-full bg-primary"></span>
                    <p>
                      <span className="font-bold text-deepblue">ধরণ:</span>
                      <br />
                      <span className="font-['kalpurush'] text-gray-500">
                        {book.categories[0]}
                      </span>
                    </p>
                  </div>
                </div>

                <Link
                  href={`/books/${book.id}`}
                  className="border bg-transparent shadow-none border-primary py-5 w-fit px-7 rounded-none mt-4"
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Books;
