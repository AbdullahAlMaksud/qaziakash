"use client";

import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // const bookClassById = (edition) => {
  //   switch (edition) {
  //     case 1:
  //       return "";
  //     case 2:
  //       return "mt-10";
  //     case 3:
  //       return "";
  //     case 4:
  //       return "mt-10";
  //     case 5:
  //       return "-mt-2";
  //     case 6:
  //       return "mt-10";
  //     default:
  //       return "top-0 left-0";
  //   }
  // };

  const { data: books } = useFetch("/data/BooksData.json");

  return (
    <section className="-mt-16 bg-gradient-to-bl from-primary/10 to-secondary/50 pt-24 lg:pt-16 md:h-[30rem] rounded-br-3xl font-bengali md:border-b-2 border-primary">
      <div className="h-full flex">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 222500,
            disableOnInteraction: false,
          }}
          className="mySwiper lg:w-11/12 mx-auto"
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          <SwiperSlide>
            <section className="flex items-center h-full w-11/12 lg:w-3/4 mx-auto">
              <div className="flex items-center justify-between">
                <div className="w-1/2 h-full">
                  <h3 className="text-primary-foreground font-light text-xl">
                    আপনাকে স্বাগতম!
                  </h3>
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    আমি{" "}
                    <span className="text-primary block lg:inline-block">
                      কাজী আকাশ
                    </span>
                  </h2>
                  <h3 className="block md:hidden">
                    আপনাকে স্বাগতম। আমি একজন লেখক এই ওয়েবসাইটে আমার সব বই ও
                    লেখালেখি সম্পর্কে নিয়মিত জানতে পারবেন। সরাসরি...
                  </h3>
                  <h3 className="hidden md:block mb-4">
                    আপনাকে স্বাগতম। আমি একজন লেখক এই ওয়েবসাইটে আমার সব বই ও
                    লেখালেখি সম্পর্কে নিয়মিত জানতে পারবেন। সরাসরি আমাকে বার্তা
                    পাঠানো যাবে। লেখালিখি সম্পর্কে আপনার যে কোনো মতামত পাঠাতে
                    পারেন আমাকে। বর্তমানে মাসিক বিজ্ঞান সাময়ীকি বিজ্ঞানচিন্তায়
                    সহ সম্পাদক হিসেবে কর্মরত আছি।
                  </h3>
                  <Link
                    href={"/about"}
                    className="rounded-sm  bg-transparent text-black border border-primary hover:bg-primary hover:text-black mb-4 px-4 py-1 lg:py-2 md:mb-0 flex items-center justify-center w-52 shadow shadow-black/20 duration-300 gap-2"
                  >
                    আমার সম্পর্কে বিস্তারিত{" "}
                    <span className="inline-block">
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
                <div className="w-1/2 h-full flex justify-end items-end translate-y-4">
                  <Image
                    unoptimized={true}
                    className="w-64 object-cover object-top"
                    src="/qazi_akash/QaziAkashTransparent.png"
                    alt="book"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="w-11/12 lg:w-3/4 mx-auto h-full">
              <h3 className="text-secondary-foreground text-3xl text-center">
                আমার বইগুলো
              </h3>
              <div className="flex h-full items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
                  {books?.map((book, index) => (
                    <Link href={`/books/${book.id}`} key={index}>
                      <Image
                        unoptimized={true}
                        src={book.cover}
                        alt={book.title}
                        width={50}
                        height={50}
                        className="w-full h-28 lg:h-56 object-cover object-top"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
