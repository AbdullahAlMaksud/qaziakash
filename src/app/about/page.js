"use client";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import BooksSlider from "@/pages/home/books_slider/booksSlider";
import Newsletter from "@/pages/home/newsletter/newsletter";
import Publishers from "@/pages/home/publishers/publishers";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const page = () => {
  const { data } = useFetch("/data/PublisherData.json");
  console.log(data);
  return (
    <section className="-mt-16 bg-lightblue">
      <div className="bg-gradient-to-b to-deepblue from-blue-800 pt-16 pb-8 lg:pt-16 lg:pb-16 text-white">
        <div className="flex flex-col items-center font-english">
          <h2 className="lg:mb-4 mb-2 text-center text-3xl lg:text-5xl font-bold">
            About the Author
          </h2>
          <hr className="w-14 h-0.5 bg-primary mb-2 lg:mb-4" />
          <p className="text-center w-full leading-tight lg:leading-none px-8 lg:px-0 lg:w-1/3 mx-auto">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </p>
        </div>
      </div>

      <section className="bg:lightblue mt-4 lg:mt-16 ">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <Image
            unoptimized="true"
            src={"/qazi_akash/QaziAkash.jpg"}
            alt="Qazi Akash"
            width={100}
            height={100}
            className="w-full max-h-[40rem] object-top lg:mb-10 object-cover mx-auto shadow-md rounded"
          />

          <div className="flex flex-col-reverse lg:flex-row lg:gap-20">
            <div className="grid grid-cols-2 min-w-96 font-english gap-1 pt-4 lg:pt-5 lg:pb-5 lg:px-5 lg:p-5 bg-lightblue">
              <h2 className="font-bold">Country:</h2>
              <p>Bangladesh</p>
              <h2 className="font-bold">Language:</h2>
              <p>Bangla</p>
              <h2 className="font-bold">Genre:</h2>
              <p>Non-Fiction</p>
              <h2 className="font-bold">Starting from:</h2>
              <p>2018</p>

              <h2 className="font-bold">Share us on:</h2>
              <div className="flex gap-4">
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <FaWhatsapp />
                </span>
                <span>
                  <FaXTwitter />
                </span>
              </div>
            </div>
            <div className="font-english flex flex-col justify-between w-fit mt-4 lg:mt-0">
              <h2 className="text-2xl font-bold pb-2">About Qazi Akash</h2>
              <hr className="w-10 h-0.5 bg-primary mb-4 lg:mb-4" />
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, that can combined with a handful of model sentence
                structures.
              </p>
              <Button className="rounded-none mt-2 w-fit">
                Connect with me
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-20"></div>
      </section>

      <section className="bg-white lg:p-20 ">
        <div className="w-11/12 lg:flex-row flex-col-reverse flex mx-auto lg:gap-20">
          {/* Sectio 2 Descriptio */}
          <div className="font-english lg:w-1/2 flex flex-col justify-between">
            <h2 className="text-2xl font-bold pb-2">About Qazi Akash</h2>
            <hr className="w-10 h-0.5 bg-primary mb-4 lg:mb-4" />
            <p className="font-inter text-gray-500 text-sm font-light">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, that can combined with a handful of model sentence
              structures.
            </p>
            <div className="mt-4 relative flex flex-col gap-10">
              <hr className="border-dashed absolute -z-0 top-52 lg:top-32 -left-[8.2rem] lg:-left-[5.6rem] w-80 lg:w-60 rotate-90  border-deepblue" />
              <div className="flex gap-6 lg:gap-10 items-center">
                <p className="min-w-14 min-h-14 bg-primary z-10 flex items-center justify-center text-2xl font-bold">
                  01
                </p>
                <div>
                  <h3 className="text-xl font-bold font-english">
                    Great Author Awards - 1996 & 2000
                  </h3>
                  <p className="font-inter text-gray-500 text-sm">
                    How to navigate around the interface and toggle on/off the
                    panels you wish to use.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 lg:gap-10  items-center">
                <p className="min-w-14 min-h-14 bg-primary z-10 flex items-center justify-center text-2xl font-bold">
                  02
                </p>
                <div>
                  <h3 className="text-xl font-bold">
                    Great Author Awards - 1996 & 2000
                  </h3>
                  <p className="font-inter text-gray-500 text-sm">
                    How to navigate around the interface and toggle on/off the
                    panels you wish to use.
                  </p>
                </div>
              </div>
              <div className="flex  gap-6 lg:gap-10  items-center">
                <p className="min-w-14 min-h-14 bg-primary z-10 flex items-center justify-center text-2xl font-bold">
                  03
                </p>
                <div>
                  <h3 className="text-xl font-bold">
                    Great Author Awards - 1996 & 2000
                  </h3>
                  <p className="font-inter text-gray-500 text-sm">
                    How to navigate around the interface and toggle on/off the
                    panels you wish to use.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Images 2 */}
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <Image
              unoptimized="true"
              src={"/qazi_akash/QaziAkash.jpg"}
              alt="Qazi Akash"
              width={100}
              height={100}
              className="w-full h-full object-top mb-4 lg:mb-10 object-cover mx-auto shadow-md rounded"
            />
          </div>
        </div>

        <BooksSlider />
        <Publishers data={data} width={"w-20"} />
        <Newsletter />
      </section>
    </section>
  );
};

export default page;
