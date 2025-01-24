import TitleOne from "@/components/shared/titleOne/titleOne";
import Image from "next/image";

const Publishers = ({ data }) => {
  return (
    <section className="my-8 lg:my-32 font-english flex flex-col items-center">
      <TitleOne title="Publishers & Distributors" />
      <div className="flex flex-wrap justify-center lg:flex-row gap-6">
        {data?.map((item) => (
          <Image
            key={item.id}
            className={
              item.id == 4
                ? `object-contain w-10 lg:w-40`
                : `object-contain w-20 lg:w-40`
            }
            src={item?.image}
            width={100}
            height={100}
            alt={item?.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Publishers;
