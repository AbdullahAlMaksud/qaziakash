import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="font-english">
      <div className="w-9/12 bg-primary my-16 py-28 mx-auto flex lg:items-center flex-col gap-2">
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-5xl font-bold text-blue-950">
            Read a free chapter
          </h2>
          <hr className="w-10 h-0.5 bg-deepblue mb-2" />
          <p className="w-2/3 text-center text-gray-600 font-inter text-sm">
            Making this the first true value generator on the Internet. It of
            over 200 Latin words, combined with a handful.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-10">
          <Input
            className="bg-white rounded-none px-4 py-5 w-80 placeholder:font-english shadow-none"
            placeholder="Enter your email"
          />
          <Button className="rounded-none px-20 py-5 bg-deepblue text-white hover:bg-primary-foreground">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
