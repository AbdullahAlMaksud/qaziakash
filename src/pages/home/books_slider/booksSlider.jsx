"use client";
import TitleOne from "@/components/shared/titleOne/titleOne";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/services/booksData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BooksSlider = () => {
  const { books } = useBooks();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="mb-10 mt-20">
      <div>
        <TitleOne title={"All Books"} />
      </div>

      <div className="relative w-11/12 mx-auto">
        <Swiper
          breakpoints={{
            // Mobile view
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Desktop view
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-11/12 mx-auto"
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          <div>
            {books.map((book) => (
              <SwiperSlide key={book.id}>
                <div className="w-full h-[29rem] flex flex-col justify-start rounded-none font-bangla">
                  <div className="py-4 bg-gray-100 w-full flex items-center justify-center">
                    <Image
                      unoptimized
                      src={book.cover}
                      alt={book.title}
                      height={100}
                      width={100}
                      className="lg:w-40 lg:h-60 shadow shadow-black object-cover"
                    ></Image>
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between w-full mt-3 mb-1">
                      <h2 className="text-xl text-deepblue font-bold truncate">
                        {book.title}
                      </h2>
                      <p className="flex items-baseline gap-2 font-[kalpurush] text-primary font-bold">
                        <FaBangladeshiTakaSign className="" />{" "}
                        <span className="text-xl">{book.price}</span>
                      </p>
                    </div>
                    <p className="pb-2 text-sm text-gray-500">
                      {book.description.split(" ").slice(0, 9).join(" ")}...
                    </p>
                    <div className="flex items-center gap-2 mb-5">
                      <FaCircle className="text-primary" />
                      <span>{book.categories.join(", ")}</span>
                    </div>
                    <Link
                      href={"/"}
                      className=" border border-primary px-6 py-3 hover:bg-primary"
                    >
                      বিস্তারিত দেখুন
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        {/* Navigation buttons */}
        <Button
          className={`swiper-button-prev-custom absolute top-1/2 left-0 z-10 p-2 rounded-none shadow-md transition-all
          ${
            isBeginning
              ? "bg-gray-200 cursor-not-allowed opacity-50"
              : "bg-white cursor-pointer hover:bg-gray-50"
          }`}
          disabled={isBeginning}
        >
          <FaAngleLeft />
        </Button>

        <Button
          className={`swiper-button-next-custom absolute top-1/2 right-0 z-10 p-2 rounded-none shadow-md transition-all
          ${
            isEnd
              ? "bg-gray-200 cursor-not-allowed opacity-50"
              : "bg-white cursor-pointer hover:bg-gray-50"
          }`}
          disabled={isEnd}
        >
          <FaAngleRight />
        </Button>
      </div>
    </section>
  );
};

export default BooksSlider;
