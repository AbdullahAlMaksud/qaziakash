"use client";
import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";
import { CiAt, CiFacebook } from "react-icons/ci";
import Typewriter from "typewriter-effect";

export default function ComingSoon() {
  const { books } = useFetch("/data/booksData.json");
  return (
    <section className="min-h-screen flex items-center justify-center flex-col relative">
      <div className="bg-secondary w-full flex items-center justify-center py-20 flex-col">
        <h2 className="font-bangla text-4xl font-bold">
          <Typewriter
            options={{
              strings: ["শিগগিরই আসছে...", "অপেক্ষা করুন!", "নতুন কিছু আসছে!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="flex items-center gap-2 pt-2">
          <Link
            className="font-english font-extralight text-sm text-black"
            href={"/"}
          >
            qaziakash.com
          </Link>
          <hr className="w-[.1rem] min-h-4 bg-black " />
          <div className="border flex gap-1 lg:gap-1 p-0.5 border-black">
            <Link
              className="font-english font-extralight text-sm"
              href={"https://www.facebook.com/"}
            >
              <CiFacebook />
            </Link>
            <Link
              className="font-english font-extralight text-sm"
              href={"mailto:qaziakash.math@gmail.com"}
            >
              <CiAt />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
