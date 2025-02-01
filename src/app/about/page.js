"use client";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import BooksSlider from "@/pages/home/books_slider/booksSlider";
import Publishers from "@/pages/home/publishers/publishers";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

// আমার শুরু
//

const page = () => {
  const { data } = useFetch("/data/PublisherData.json");
  console.log(data);
  return (
    <section className="-mt-16 pt-16">
      <section className="bg:lightblue mt-4  lg:mt-16 ">
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
              <h2 className="font-bold">দেশ:</h2>
              <p>বাংলাদেশ</p>
              <h2 className="font-bold">ভাষা:</h2>
              <p>বাংলা</p>
              <h2 className="font-bold">লেখালেখির ধরন:</h2>
              <p>নন-ফিকশন</p>
              <h2 className="font-bold">লেখালেখি শুরু:</h2>
              <p>২০১৮</p>

              <h2 className="font-bold">আমার সঙ্গে যুক্ত হন:</h2>
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
                <span>
                  <FaInstagram />
                </span>
              </div>
            </div>
            <div className="font-english flex flex-col justify-between w-fit mt-4 lg:mt-0">
              <h2 className="text-2xl font-bold pb-2">আমাকে জানুন</h2>
              <hr className="w-10 h-0.5 bg-primary mb-4 lg:mb-4" />
              <p>
                সহজ ভাষায় বিজ্ঞান ও গণিত মানুষের মাঝে পৌঁছে দেওয়ার কাজটাই আমি
                করি। এ জন্য ২০১৮ সালে যুক্ত হই বিজ্ঞানবিষয়ক মাসিক ম্যাগাজিন
                বিজ্ঞানচিন্তার সঙ্গে। বর্তমানে বিজ্ঞানচিন্তার সহসম্পাদক হিসেবে
                কর্মরত। পাশাপাশি ২০১৬-২০২৩ সাল পর্যন্ত করেছি শিক্ষকতা। ছোটদের
                জন্য নিয়মিত লিখছি মাসিক ম্যাগাজিন কিশোর আলো এবং দৈনিক প্রথম
                আলোয়। গোপালগঞ্জের কোটালিপাড়ার মান্দ্রা গ্রামে আমার জন্ম ১৫
                ডিসেম্বর। সেখানেই বড় হয়েছি। পড়ালেখা করেছি গণিতে। তিন ভাই-বোনের
                মধ্যে আমিই বড়। বাবা-মা থাকেন গ্রামে। মেয়ে ও স্ত্রীকে নিয়ে
                রাজধানীতে আমাদের ছোট্ট সংসার।
              </p>
              <Button className="rounded mt-2 w-fit">যোগাযোগ করুন</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-20"></div>
      </section>

      <section className="bg-white lg:p-20 ">
        <div className="w-11/12 lg:flex-row flex-col-reverse flex mx-auto lg:gap-20">
          {/* Sectio 2 Descriptio */}
          <div className="font-english lg:w-1/2 flex flex-col justify-start">
            <h2 className="text-2xl font-bold pb-2"> আমার সম্পর্কে </h2>
            <hr className="w-10 h-0.5 bg-primary mb-4 lg:mb-4" />
            <p className="font-inter text-gray-500 text-sm font-light">
              শুরুটা হয়েছে বিজ্ঞানচিন্তার হাত ধরে। এরপর থেকে দৈনিক প্রথম আলো,
              বিজ্ঞানচিন্তা ও কিশোর আলোয় লিখছি নিয়মিত। লেখালেখি করেছি দেশের আরও
              কিছু প্রথম সারির দৈনিক পত্রিকায় এবং অনলাইন প্লাটফর্মে। ইতিমধ্যে
              প্রকাশিত হয়েছে বেশ কয়েকটি বই। আমার কাজটাই করে যেতে চাই নিয়মিত।
            </p>
            <div className="mt-4 relative flex flex-col gap-6">
              <hr className="border-dashed absolute -z-0 top-52 lg:top-32 -left-[8.2rem] lg:-left-[5.6rem] w-80 lg:w-60 rotate-90  border-deepblue" />
              <div className="flex gap-6 lg:gap-10 items-center">
                <p className="min-w-14 min-h-14 bg-primary z-10 flex items-center justify-center text-2xl rounded font-bold">
                  ০১
                </p>
                <div>
                  <h3 className="text-xl font-bold font-english">
                    প্রথম প্রকাশিত লেখা - ২০১৮
                  </h3>
                  <p className="font-inter text-gray-500 text-sm">
                    বিজ্ঞানচিন্তায় প্রথম ব্যাকটেরিয়া নিয়ে একটি ফিচার প্রকাশিত
                    হয়।
                  </p>
                </div>
              </div>
              <div className="flex gap-6 lg:gap-10  items-center">
                <p className="min-w-14 min-h-14 bg-primary z-10 flex items-center justify-center text-2xl rounded font-bold">
                  ০২
                </p>
                <div>
                  <h3 className="text-xl font-bold">
                    জাতীয় দৈনিকে প্রকাশিত প্রথম লেখা - ২০২২
                  </h3>
                  <p className="font-inter text-gray-500 text-sm">
                    প্রথম আলোর গোল্লাছুট পাতায় ‘কী কী কেন কেন’ বিভাগে প্রথম লেখা
                    প্রকাশিত হয়।
                  </p>
                </div>
              </div>
              <div className="flex  gap-6 lg:gap-10  items-center">
                <p className="min-w-14 min-h-14 bg-primary z-10 flex items-center justify-center text-2xl rounded font-bold">
                  ০৩
                </p>
                <div>
                  <h3 className="text-xl font-bold">
                    প্রথম প্রকাশিত বই - ২০২৩
                  </h3>
                  <p className="font-inter text-gray-500 text-sm">
                    প্রথমা প্রকাশন থেকে প্রকাশিত আমার প্রথম বই গণিতের খেলা
                    গণিতের মজা
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Images 2 */}
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <Image
              unoptimized="true"
              src={"/qazi_akash/QaziAkash_Young.jpg"}
              alt="Qazi Akash"
              width={100}
              height={100}
              className="w-full h-full object-top  object-cover mx-auto shadow-md rounded"
            />
          </div>
        </div>

        <div className="mt-8 lg:mt-20">
          <BooksSlider />
        </div>

        <div className="mt-8 lg:mt-20">
          <Publishers data={data} width={"w-20"} />
        </div>
        {/* <Newsletter /> */}
      </section>
    </section>
  );
};

export default page;
