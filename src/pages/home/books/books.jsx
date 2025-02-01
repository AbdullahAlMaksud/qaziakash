"use client";
import TitleOne from "@/components/shared/titleOne/titleOne";
import { useFetch } from "@/hooks/useFetch";
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
    <section className="font-english mx-auto">
      <section className="w-11/12 md:container flex flex-col justify-center items-center mx-auto">
        <TitleOne title={"প্রকাশিত নতুন বই"} />

        {/* Books Gallery */}
        <div className="flex flex-col lg:flex-row font-bengali gap-4">
          {books?.slice(0, 3).map((book) => (
            <div key={book.id} className="flex gap-4">
              <div>
                <Image
                  unoptimized="true"
                  width={100}
                  height={100}
                  className="w-40 shadow shadow-black/50 rounded lg:min-w-52 lg:min-h-72 object-cover"
                  src={book.cover}
                  alt={book.title}
                />
              </div>

              <div className="flex w-60 lg:max-w-52 flex-col justify-center">
                <h2 className="font-bengali  text-deepblue text-2xl font-bold truncate">
                  {book.title}
                </h2>
                <p className="pt-2 lg:hidden text-gray-500 text-sm text-justify">
                  {book.description.split(" ")?.slice(0, 5).join(" ")}...
                </p>
                <p className="hidden lg:block pt-2 text-gray-500 text-sm text-justify">
                  {book.shortDescription.split(" ")?.slice(0, 22).join(" ")}...
                </p>
                <div className="pt-4 flex gap-4">
                  <div className="flex items-start gap-2">
                    <p>
                      <span className="font-bold text-deepblue">ধরণ</span>
                      <br />
                      <span className="font-['kalpurush'] text-gray-500">
                        {book.categories[0]}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <p>
                      <span className="font-bold text-deepblue">প্রকাশক</span>
                      <br />
                      <span className="font-['kalpurush'] text-gray-500">
                        {book.id === 3
                          ? "স্বপ্ন ৭১"
                          : book.publisher.split(" ")[0]}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <p>
                      <span className="font-bold text-deepblue">প্রকাশকাল</span>
                      <br />
                      <span className="font-['kalpurush'] text-gray-500">
                        {book.year}
                      </span>
                    </p>
                  </div>
                </div>

                <Link
                  href={`/books/${book.id}`}
                  className="border bg-transparent border-primary py-4 rounded w-fit px-7 shadow mt-4 hover:bg-primary hover:text-black duration-500 hover:duration-500"
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
