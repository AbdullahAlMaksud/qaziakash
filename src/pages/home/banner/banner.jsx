"use client";

import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useFetch } from "@/hooks/useFetch";
import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const bookClassById = (edition) => {
    switch (edition) {
      case 1:
        return "";
      case 2:
        return "mt-10";
      case 3:
        return "";
      case 4:
        return "mt-10";
      case 5:
        return "-mt-2";
      case 6:
        return "mt-10";
      default:
        return "top-0 left-0";
    }
  };
  const { data: books, loading, error } = useFetch("/data/BooksData.json");
  return (
    <section className="-mt-16">
      <div className="bg-gradient-to-t  from-[#031535] to-[#2a559d] min-h-[35rem] pt-16 lg:pt-0 flex flex-col-reverse lg:flex-row justify-center gap-4 lg:gap-20 items-center">
        {/* Left */}

        <div className="lg:w-1/3 w-11/12 pb-4 lg:pb-0 font-bangla flex flex-col">
          <p className="font-inter text-xs text-gray-400">
            Science, Math, History, Story Writer
          </p>
          <h1 className="text-4xl mt-4 text-white">Qazi Akash</h1>
          <p className="pt-4 font-inter text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            deleniti, nostrum doloribus enim rerum suscipit inventore ullam eius
            adipisci maiores necessitatibus atque laboriosam pariatur hic
            laudantium iste sequi voluptatum nisi quas mollitia et. Ad vero quis
            neque fugiat atque expedita est provident labore assumenda maxime?
            Maxime eos cupiditate perspiciatis repellendus.
          </p>
          <div className="mt-8">
            <Link
              className="px-10 py-2 font-bold hover:bg-transparent hover:text-primary border border-transparent hover:border-primary bg-primary capitalize flex items-center gap-2 w-fit"
              href={"/books"}
            >
              সব বই
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className="min-h-[calc(35rem-128px)] w-[22rem] bg flex items-center justify-center">
          <div className="relative h-full w-full z-0 flex flex-wrap gap-2 justify-center items-center">
            <span className="min-h-28 min-w-3 left-14 bg-lightblue absolute -z-10"></span>
            <span className="min-h-28 min-w-3 right-14 bg-lightblue absolute -z-10"></span>
            {books?.map((book) => (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className={`${bookClassById(
                  book.id
                )} relative border-4 border-lightblue h-40 w-28 hover:scale-105 duration-200`}
              >
                <div className="absolute -top-2 animate-ping -left-2 w-5 h-5 rounded-full bg-primary -z-10"></div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src={book.cover}
                        alt={book.title}
                        height={100}
                        width={100}
                        className="h-[9.5rem] w-28 object-cover relative"
                      />
                    </TooltipTrigger>
                    <TooltipContent>{book.title}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
