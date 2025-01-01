"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const [bookShortInfo, setBookShortInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/BookShortInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setBookShortInfo(data);
        setLoading(false);
      });
  }, []);
  console.log(bookShortInfo.length);

  return (
    <section
      className="w-full
    bg-gradient-to-t from-[#031535] to-[#2a559d] pt-16 rounded-b-sm"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {bookShortInfo.map((book) => (
          <SwiperSlide key={book.id}>
            <section
              key={book.id}
              className="w-11/12 mx-auto flex py-10 items-center lg:items-start justify-between"
            >
              <div className="flex items-center justify-between lg:items-start flex-col-reverse md:flex-row gap-2 w-full">
                <div className="text-white w-full md:w-1/2 flex flex-col items-center md:items-start">
                  <h3 className="flex items-center lg:items-start gap-2 font-english font-light">
                    <hr className="w-8 border border-primary" />{" "}
                    {book.categories.join(", ")}
                  </h3>
                  <h2 className="text-3xl font-bold">{book.title}</h2>
                  <p className="font-light pt-3 text-center md:text-left">
                    {book.description}
                  </p>

                  <div className="flex items-center font-english font-normal pt-5 gap-4">
                    <Button className="rounded-none">View Details</Button>
                    <Button className="bg-transparent hover:bg-transparent text-white shadow-none border-b rounded-none px-0 pb-0.5 h-7">
                      Read Free Demo
                    </Button>
                  </div>

                  <div className="mt-4 hidden md:flex items-center gap-6 font-english">
                    <div className="flex items-start gap-2">
                      <span className="min-w-4 max-w-min min-h-4 rounded-full bg-primary"></span>
                      <div className="-mt-1">
                        <p className="text-lg font-bold">Pages:</p>
                        <p>{book.pages} pages</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="min-w-4 max-w-min min-h-4 rounded-full bg-primary"></span>
                      <div className="-mt-1">
                        <p className="text-lg font-bold">Length:</p>
                        <p>{book.timeToRead} Hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="min-w-4 max-w-min min-h-4 rounded-full bg-primary"></span>
                      <div className="-mt-1">
                        <p className="text-lg font-bold">Ratings:</p>
                        <p>
                          {book.rating}/5 ({book.ratedByUser} ratings)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src={book?.cover}
                    alt={book.title}
                    height={100}
                    width={100}
                    className="w-72 h-[26rem] object-cover border-4 border-gray-200"
                  ></Image>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
