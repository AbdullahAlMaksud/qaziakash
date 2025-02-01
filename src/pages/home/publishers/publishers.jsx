"use client";

import TitleOne from "@/components/shared/titleOne/titleOne";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";

import Marquee from "react-fast-marquee";

const Publishers = () => {
  const { data } = useFetch("/data/PublisherData.json");
  return (
    <section className="font-english flex flex-col items-center">
      <TitleOne title="প্রকাশক ও পরিবেশক" />
      <Marquee>
        <div className="flex flex-wrap justify-center lg:flex-row gap-12">
          {data?.map((item) => (
            <Image
              unoptimized="true"
              key={item.id}
              className={`object-contain h-12 w-auto`}
              src={item?.image}
              width={100}
              height={100}
              alt={item?.name}
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Publishers;
