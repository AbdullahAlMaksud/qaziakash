import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="bg-blue-700 text-white  font-english">
      <div className="w-11/12 mx-auto md:container py-5 flex lg:items-center flex-col lg:flex-row gap-2">
        <h2 className="text-xl px-3 text-center lg:px-20 font-bold font-bangla">
          নতুন বই বা লেখার খবর পেতে ইমেইল দিয়ে{" "}
          <span className="text-primary">সাবস্ক্রাইব</span> করুন!
        </h2>

        <div className="flex lg:flex-1 lg:flex-row lg:gap-2 flex-col border border-primary lg:border-0 rounded-b rounded-t">
          <Input
            className="bg-white rounded-b-none placeholder:font-english shadow-none"
            placeholder="Enter your email"
          />
          <Button className="rounded-t-none">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
