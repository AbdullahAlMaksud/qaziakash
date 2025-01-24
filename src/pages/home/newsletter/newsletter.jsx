"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

const Newsletter = () => {
  const { path } = usePathname();

  return (
    <section
      className={`${
        path === "/"
          ? "font-english bg-lightblue py-8"
          : "bg-white font-english py-8"
      }`}
    >
      <div className="py-8 w-11/12 lg:w-9/12 bg-primary lg:my-16 lg:py-28 px-4 lg:px-0 mx-auto flex lg:items-center flex-col gap-2">
        <div className="flex flex-col items-center">
          <h2 className="lg:mb-4 text-3xl lg:text-5xl text-center font-bold text-blue-950">
            Read a free chapter
          </h2>
          <hr className="lg:w-10 h-0.5 bg-deepblue mb-2" />
          <p className="lg:w-2/3 text-center text-gray-600 font-inter text-sm">
            Making this the first true value generator on the Internet. It of
            over 200 Latin words, combined with a handful.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 mt-2 lg:mt-10">
          <Input
            className="bg-white rounded-none px-4 py-5 lg:w-80 placeholder:font-english shadow-none"
            placeholder="Enter your email"
          />
          <Button className="rounded-none w-full lg:w-fit lg:px-20 py-5 bg-deepblue text-white hover:bg-primary-foreground">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
