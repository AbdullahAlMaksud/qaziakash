"use client";
import BooksCard from "@/components/shared/booksCard/booksCard";
import TitleOne from "@/components/shared/titleOne/titleOne";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/hooks/use-queries";
// import { useBooks } from "@/hooks/services/booksData";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BooksSlider = () => {
  const { data: books } = useBooks();
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
            {books?.map((book) => (
              <SwiperSlide key={book.id}>
                <BooksCard book={book} />
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
