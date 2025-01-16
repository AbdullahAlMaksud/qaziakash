import TitleOne from "@/components/shared/titleOne/titleOne";
import Image from "next/image";

const Publishers = () => {
  return (
    <section className="my-8 lg:my-32 font-english flex flex-col items-center">
      <TitleOne title="Publishers & Distributors" />
      <div className="flex flex-wrap justify-center lg:flex-row gap-6">
        <Image
          className="object-contain lg:w-40"
          src={"/images/publishers/prothoma.png"}
          width={100}
          height={100}
          alt="Onupom"
        />
        <Image
          className="object-contain lg:w-40"
          src={"/images/publishers/rokomari.png"}
          width={100}
          height={100}
          alt="Onupom"
        />
        <Image
          className="object-contain lg:w-40 "
          src={"/images/publishers/prothomadotcom.jpg"}
          width={100}
          height={100}
          alt="Onupom"
        />
        <Image
          className="object-contain lg:w-40"
          src={"/images/publishers/onupom.jpg"}
          width={100}
          height={100}
          alt="Onupom"
        />
      </div>
    </section>
  );
};

export default Publishers;
