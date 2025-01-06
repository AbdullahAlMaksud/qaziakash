"use client";
import { useToast } from "@/hooks/use-toast";
import { useBooks } from "@/services/booksData";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Footer = () => {
  const { books } = useBooks();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });
  };

  return (
    <footer className="bg-deepblue dark:bg-gray-900 text-white">
      <div className="w-9/12 container mx-auto py-10 flex justify-between">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-2">
            <Image
              height={100}
              width={100}
              className="w-auto h-7"
              src="/fav-icon.svg"
              alt=""
            />
            <span className="font-english text-xl">Qazi Akash</span>
          </Link>

          <div className="flex gap-2  mt-4">
            <Link
              href={"/"}
              className="text-white border-primary text-2xl p-2 border"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"/"}
              className="text-white border-primary text-2xl p-2 border"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href={"/"}
              className="text-white border-primary text-2xl p-2 border"
            >
              <FaYoutubeSquare />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-english text- text-xl font-bold pb-2">Explore</h2>
          <ul className="text-sm font-inter">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Books</Link>
            </li>
            <li>
              <Link href={"/"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/"}>Appointments</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-english text- text-xl font-bold pb-2">Books</h2>
          <ul className="text-sm font-inter">
            {books?.map((book) => (
              <li key={book.id}>
                <Link href={`/books/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-english text- text-xl font-bold pb-2">
            Send a Massages
          </h2>

          <div>
            <form className="space-y-2 flex flex-col">
              <div className="flex gap-2 flex-row">
                <Input
                  className="bg-white/10 rounded-none px-4 py-1 w-40 placeholder:font-english shadow-none"
                  placeholder="Name"
                  required
                />
                <Input
                  className="bg-white/10 rounded-none px-4 py-1 w-60 placeholder:font-english shadow-none"
                  placeholder="Email"
                  required
                />
              </div>
              <Textarea
                className="bg-white/10 rounded-none px-4 py-1 w-full placeholder:font-english shadow-none resize-none"
                rows={3}
                placeholder="Message"
              />
              <Button
                type="submit"
                className="rounded-none"
                onClick={handleSubmit}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="space-y-5 flex justify-center flex-col items-center">
        <hr className="w-1/2 border-gray-500" />
        <p className="text-sm text-gray-300 font-english dark:text-gray-300 pb-5">
          © Copyright 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
