"use client";
import { useToast } from "@/hooks/use-toast";
import { useFetch } from "@/hooks/useFetch";
import { LibraryBig } from "lucide-react";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaPaperPlane, FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Footer = () => {
  const { data: books, loading, error } = useFetch("/data/BooksData.json");

  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "মেসেজ পাঠানো হয়েছে",
      description: "আপনার মেসেজ সফলভাবে লেখকের কাছে পৌছে গিয়েছে।",
    });
  };

  return (
    <footer className="bg-secondary-foreground dark:bg-gray-900 rounded-t-xl text-white">
      <div className="w-9/12 container mx-auto py-10 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col  lg:items-start">
          <Link href="/" className="flex items-center gap-2">
            <LibraryBig className="text-primary" />
            <span className="font-english text-xl">কাজী আকাশ</span>
          </Link>

          <div className="flex gap-2  mt-4">
            <Link
              href={"https://www.facebook.com/sohagislam.akash "}
              className="text-white border-primary rounded text-2xl p-2 border"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"https://x.com/akash_qazi"}
              className="text-white border-primary rounded text-2xl p-2 border"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/qazi-akash-99744726b/"}
              className="text-white border-primary rounded text-2xl p-2 border"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-between my-4 lg:gap-10 lg:mt-0">
          <div className="w-16">
            <h2 className="font-english text- text-xl font-bold pb-2">পেজ</h2>
            <ul className="text-sm font-inter">
              <li>
                <Link href={"/"}>হোম</Link>
              </li>
              <li>
                <Link href={"/"}>বইপত্র</Link>
              </li>
              <li>
                <Link href={"/"}>লেখালেখি</Link>
              </li>
              <li>
                <Link href={"/"}>যোগাযোগ</Link>
              </li>
              <li>
                <Link href={"/"}>পরিচিত</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-english text- text-xl font-bold pb-2">
              বইপত্র
            </h2>
            <ul className="text-sm font-bengali">
              {books?.map((book) => (
                <li key={book.id}>
                  <Link href={`/books/${book.id}`}>{book.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-english text- text-xl font-bold pb-2">
            মেসেজ পাঠান
          </h2>

          <div>
            <form className="space-y-2 flex flex-col">
              <div className="flex gap-2 flex-col lg:flex-row">
                <Input
                  className="bg-white/10 rounded px-4 py-1 lg:w-40 placeholder:font-english shadow-none"
                  placeholder="আপনার নাম"
                  required
                />
                <Input
                  className="bg-white/10 rounded px-4 py-1 lg:w-60 placeholder:font-english shadow-none"
                  placeholder="ইমেইল অ্যাড্রেস"
                  required
                />
              </div>
              <Textarea
                className="bg-white/10 rounded px-4 py-1 w-full placeholder:font-english shadow-none resize-none"
                rows={3}
                placeholder="আপনার মেসেজ লিখুন..."
              />
              <Button type="submit" className="rounded" onClick={handleSubmit}>
                পাঠিয়ে দিন <FaPaperPlane />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="space-y-5 flex justify-center flex-col items-center">
        <hr className="w-1/2 border-gray-500" />
        <p className="text-sm text-gray-300 font-english dark:text-gray-300 pb-5">
          © {new Date().getFullYear()} Qazi Akash | All Rights Reserved. |{" "}
          <Link
            className="inline-block"
            href={"https://www.linkedin.com/in/abdullahalmaksud"}
          >
            Made with ❤️ in Bangladesh.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
