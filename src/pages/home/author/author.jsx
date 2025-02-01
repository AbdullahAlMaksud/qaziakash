"use client";

import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";

const Author = () => {
  const { data: author, loading, error } = useFetch("/data/AuthorData.json");
  console.log(author);

  console.log(author);

  return (
    <section className="font-bengali w-11/12 mx-auto lg:container lg:flex lg:justify-between lg:items-center lg:gap-20">
      <div className="flex items-center justify-center">
        <div className="relative z-20">
          <Image
            unoptimized="true"
            className="w-[15rem] lg:w-[25rem]  z-20 rounded-sm lg:h-[27rem] h-[16rem] object-cover"
            alt="Qazi Akash"
            width={100}
            height={100}
            src={"/qazi_akash/QaziAkash.jpg"}
          ></Image>
          <div className="min-w-[15rem] h-[16rem] lg:min-w-[25rem] lg:h-[28rem] lg:border-[10px] rounded-sm border-[7px] border-primary absolute top-5 left-5 -z-10"></div>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-2/3">
        <h2 className="text-3xl text-blue-950 font-bold pb-2">কাজী আকাশ</h2>
        <hr className="bg-primary h-0.5 w-14" />
        <p className="text-justify pt-3 text-lg">
          সহজ ভাষায় বিজ্ঞান ও গণিত মানুষের মাঝে পৌঁছে দেওয়ার চেষ্টা করছি। এ জন্য
          ২০১৮ সালে যুক্ত হই বিজ্ঞানবিষয়ক মাসিক ম্যাগাজিন বিজ্ঞানচিন্তার সঙ্গে।
          বর্তমানে বিজ্ঞানচিন্তার সহসম্পাদক হিসেবে কর্মরত। পাশাপাশি ২০১৬-২০২৩
          সাল পর্যন্ত করেছি শিক্ষকতা। ছোটদের জন্য নিয়মিত লিখছি মাসিক ম্যাগাজিন
          কিশোর আলো এবং দৈনিক <span className="">প্রথম আলো</span>য়।
          <span className="pt-4 block">
            গোপালগঞ্জের কোটালিপাড়ার মান্দ্রা গ্রামে আমার জন্ম ১৫ ডিসেম্বর।
            সেখানেই বড় হয়েছি। পড়ালেখা করেছি গণিতে। তিন ভাই-বোনের মধ্যে আমিই বড়।
            বাবা-মা থাকেন গ্রামে। মেয়ে ও স্ত্রীকে নিয়ে রাজধানীতে আমাদের ছোট্ট
            সংসার।
          </span>
        </p>
        <div className="flex items-center w-fit gap-4 justify-between my-4">
          <div className="w-full flex items-center flex-col">
            <p className="text-3xl border rounded-t border-b-0 w-44 text-center font-['kalpurush']">
              6
            </p>
            <p className="w-40 rounded-b text-center bg-gray-300">বই</p>
          </div>
          <div className="w-full flex items-center flex-col">
            <p className="text-3xl border rounded-t border-b-0 w-44 text-center font-['kalpurush']">
              1500+
            </p>
            <p className="w-40 rounded-b text-center bg-gray-300">ফিচার</p>
          </div>
        </div>

        <div className="bg-primary/90 rounded flex items-center text-white p-5 justify-center gap-4 lg:w-fit">
          <Image
            className="h-16 object-cover w-16"
            src={"/images/qr-code.png"}
            alt="QR Code"
            width={100}
            height={100}
          ></Image>
          <div>
            <h2 className="text-black text-xl font-bold">কাজী আকাশ</h2>
            <h2 className="font-light text-secondary-foreground text-xs">
              qaziakashmath@gmail.com
            </h2>
            <p className="font-light text-black text-xs">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
