import { Button } from "@/components/ui/button";
import BooksSlider from "@/pages/home/books_slider/booksSlider";
import Newsletter from "@/pages/home/newsletter/newsletter";
import Publishers from "@/pages/home/publishers/publishers";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";

const page = () => {
  return (
    <section className="-mt-16 bg-lightblue">
      <div className="bg-deepblue py-32 text-white">
        <div className="flex flex-col items-center font-english">
          <h2 className="mb-4 text-center text-4xl lg:text-5xl font-bold">
            About the Author
          </h2>
          <hr className="w-14 h-0.5 bg-primary mb-4 lg:mb-4" />
          <p className="text2center w-1/3 mx-auto">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </p>
        </div>
      </div>

      <section className="bg:lightblue mt-16 ">
        <div className="w-10/12 mx-auto">
          <Image
            unoptimized="true"
            src={"/qazi_akash/QaziAkash.jpg"}
            alt="Qazi Akash"
            width={100}
            height={100}
            className="w-full max-h-[40rem] object-top mb-10 object-cover mx-auto shadow-md rounded"
          />

          <div className="flex gap-20">
            <div className="grid grid-cols-2 min-w-96 font-english gap-1 p-5 bg-lightblue">
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
                  <FaFacebook />
                </span>
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
            <div className="font-english flex flex-col justify-between w-fit">
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

        <div className="mt-20"></div>
      </section>

      <section className="bg-white p-20 ">
        <div className=" w-11/12 flex mx-auto gap-20">
          {/* Sectio 2 Descriptio */}
          <div className="font-english w-1/2 flex flex-col justify-between">
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
              <hr className="border-dashed absolute -z-0 top-32 -left-[5.6rem] w-60 rotate-90  border-deepblue" />
              <div className="flex gap-10 items-center">
                <p className="min-w-14 min-h-14 bg-primary z-50 flex items-center justify-center text-2xl font-bold">
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
              <div className="flex gap-10 items-center">
                <p className="min-w-14 min-h-14 bg-primary z-50 flex items-center justify-center text-2xl font-bold">
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
              <div className="flex gap-10 items-center">
                <p className="min-w-14 min-h-14 bg-primary z-50 flex items-center justify-center text-2xl font-bold">
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
          <div className="w-1/2">
            <Image
              unoptimized="true"
              src={"/qazi_akash/QaziAkash.jpg"}
              alt="Qazi Akash"
              width={100}
              height={100}
              className=" w-full h-full object-top mb-10 object-cover mx-auto shadow-md rounded"
            />
          </div>
        </div>

        <BooksSlider />
        <Publishers />
        <Newsletter />
      </section>
    </section>
  );
};

export default page;
