"use client";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/services/booksData";
import { Coins, Grid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Books = () => {
  const [grid, setGrid] = useState(true);
  const { books } = useBooks();
  console.log(books);

  const handleGrid = () => {
    setGrid(!grid);
  };

  console.log(grid);
  return (
    <section className="my-10 w-11/12 lg:container lg:mt-20 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="mb-4 text-3xl font-bold text-blue-950">বইপত্র</h2>
        <Button onClick={handleGrid} className="rounded-none">
          {grid === true ? <Grid /> : <List />}
        </Button>
      </div>
      <section
        className={` ${
          grid
            ? "grid grid-cols-2 lg:grid-cols-4 lg:mx-auto"
            : "flex flex-col lg:grid gap-2 lg:grid-cols-3 lg:mx-auto lg:gap-4"
        }  md:container gap-4`}
      >
        {books.map((book) => (
          <div
            key={book.id}
            className={`${
              grid
                ? "bg-white/20 shadow-sm hover:shadow-md backdrop-blur-md pb-2 flex flex-col items-center"
                : "flex-row flex items-end hover:shadow-md shadow-sm"
            } `}
          >
            <Image
              unoptimized
              src={book.cover}
              alt={book.title}
              height={100}
              width={100}
              className={`${
                grid
                  ? "h-60 md:h-[32rem]  w-[90%] object-cover object-top"
                  : "h-full w-20 object-cover object-top"
              }`}
            ></Image>
            <div className="px-2 pt-1">
              <p
                className={` ${
                  grid ? "text-center lg:text-2xl pt-2 font-bold" : "text-xl"
                }   font-bangla`}
              >
                {book.title}
              </p>
              {!grid && (
                <div className="pb-2">
                  <p className="max-w-1/2 line-clamp-1">{book.description}</p>
                  <div className="flex gap-4">
                    <p className="flex gap-1 items-center font-english bg-primary w-12 px-2 rounded">
                      <FaStar className=" text-white size-3" />
                      {book.rating}
                    </p>
                    <p className="flex gap-1 items-center bg-primary px-2 rounded font-english">
                      <Coins className="text-green-800 size-4" /> {book.price}
                    </p>
                    <Link
                      href={""}
                      className="bg-primary-foreground text-white px-2 rounded font-english"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          className={`${
            !grid && "col-span-3"
          } bg-white/20  shadow-sm hover:shadow-md flex items-center justify-center`}
        >
          <Link
            href={"/"}
            className={`${
              grid
                ? "font-bangla px-4 py-1 bg-primary font-bold shadow-sm"
                : "bg-primary w-full h-full flex items-center justify-center text-center py-1 "
            } `}
          >
            সব বই
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Books;
