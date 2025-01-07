import { Button } from "@/components/ui/button";
import Image from "next/image";

const BannerAd = () => {
  return (
    <section className="bg-deepblue  py-20">
      <div className="w-10/12 lg:container mx-auto flex flex-col-reverse lg:flex-row text-white justify-center lg:justify-normal items-center gap-5 lg:px-20">
        <div className="">
          <h2 className="mb-4 text-5xl uppercase font-english font-bold ">
            Get your copy today
          </h2>
          <hr className="w-10 h-0.5 bg-primary mb-4" />
          <p className="pr-10 text-gray-300">
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </p>
          <Button className="rounded-none bg-transparent border border-primary text-white  mt-4">
            Order Today
          </Button>
        </div>
        <Image
          unoptimized
          src={"/images/book&tea.png"}
          className="w-[35rem] h-full"
          alt="m"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default BannerAd;
