"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useFetch } from "@/hooks/useFetch";
import { Package2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaCartPlus, FaCartShopping, FaCashRegister } from "react-icons/fa6";

const BookDetails = () => {
  const { id } = useParams();
  const { data: books, loading, error } = useFetch("/data/BooksData.json");

  const [cartItemCount, setCartItemCount] = useState(0);

  const increaseCount = () => {
    setCartItemCount((prev) => {
      const newCount = prev + 1;
      return newCount;
    });
  };

  const decreaseCount = () => {
    setCartItemCount((prev) => {
      const newCount = Math.max(0, prev - 1);
      return newCount;
    });
  };

  if (loading) {
    return (
      <div className="-mt-16">
        <div className="h-[calc(100vh-240px)] text-primary flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  const book = books?.find((book) => book.id === parseInt(id));

  if (error) return <div>Error loading book details</div>;
  if (!book) return <div>Book not found</div>;

  return (
    <section className="-mt-16">
      <div className="py-8 text-white"></div>

      <section className="w-11/12 lg:mt-20 lg:container mx-auto lg:px-20">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Book Image */}
            <div className="lg:w-2/6 flex items-center justify-center lg:py-10 bg-gray-100">
              <Image
                width={300}
                height={400}
                src={book?.cover}
                alt={book.title}
                className="h-80 w-52 object-cover shadow-lg"
              />
            </div>

            {/* Book Info */}
            <div className="lg:w-4/6">
              <h1 className="text-3xl font-bold mb-4">
                {book.title}{" "}
                {book.subtitle ? <span>: {book.subtitle} </span> : null}
              </h1>
              <p className="text-3xl font-bold text-primary font-['kalpurush']">
                ৳ {book.price}
              </p>

              <p className="">{book.description}</p>

              <div className="flex items-center gap-8">
                <div className="">
                  <p className="font-bengali">প্রকাশক</p>
                  <p className="font-bengali">পৃষ্ঠা</p>
                  <p className="font-bengali">ভাষা</p>
                  <p className="font-bengali">ISBN</p>
                  <p className="font-bengali">আকার</p>
                </div>
                <div className="">
                  <p className="font-bengali">:</p>
                  <p className="font-bengali">:</p>
                  <p className="font-bengali">:</p>
                  <p className="font-bengali">:</p>
                  <p className="font-bengali">:</p>
                </div>
                <div className="">
                  <p className="font-bengali">{book.publisher}</p>
                  <p className="font-['kalpurush']">{book.pages}</p>
                  <p className="font-bengali">{book.language || "Not Found"}</p>
                  <p className="font-bengali">{book.ISBN}</p>
                  <p className="font-bengali">{book.size}</p>
                </div>
              </div>

              {/* Perches button */}
              <div className="flex items-center gap-5 mt-8">
                {book.purchaseLink?.map((link, index) => (
                  <Link
                    href={link.link}
                    key={index}
                    className="w-32 flex justify-center h-14 items-center bg-white text-primary rounded shadow-lg hover:scale-110 flex-wrap"
                  >
                    <Image
                      src={link.logo}
                      width={100}
                      height={100}
                      alt={`${index}logo`}
                      className="h-8 w-auto"
                    />
                  </Link>
                ))}
              </div>

              {/* Cart button */}
              <div className="hidden items-center gap-5 mt-8">
                <div className="grid grid-cols-3 items-center gap-1 border p-0.5 w-fit border-primary">
                  <Button
                    onClick={decreaseCount}
                    className="p-0 bg-secondary min-w-full rounded-none shadow-none"
                  >
                    -
                  </Button>
                  <Input
                    value={cartItemCount}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 0) {
                        setCartItemCount(value);
                      }
                    }}
                    type="text"
                    min="0"
                    className="text-center p-0 w-10 px-0 flex font-['kalpurush'] shadow-none border-none"
                  />
                  <Button
                    onClick={increaseCount}
                    className="p-0 px-4 bg-secondary min-w-full rounded-none shadow-none col-span-1"
                  >
                    +
                  </Button>
                </div>

                <div className="w-full p-0.5 bg-primary flex items-center justify-center">
                  <Button
                    onClick={increaseCount}
                    className="font-bengali font-bold rounded-none shadow-none w-full"
                  >
                    <FaCartPlus /> কার্টে যোগ করুন
                  </Button>
                </div>
              </div>
            </div>

            {/* Book Info */}
          </div>
        </div>
      </section>
      <section className="mt-20 w-11/12 lg:container mx-auto mb-10">
        <Tabs defaultValue="additionalInformation" className="w-full">
          <TabsList className="w-full gap-4 bg-transparent">
            <TabsTrigger
              className=" py-2 rounded  bg-secondary"
              value="additionalInformation"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger className="py-2 rounded  bg-secondary" value="reviews">
              Reviews and Ratings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="additionalInformation">
            <Table className="border rounded">
              <TableCaption></TableCaption>
              <TableHeader></TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="w-1/6 bg-secondary">Title</TableCell>
                  <TableCell>{book.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/6 bg-secondary">Author</TableCell>
                  <TableCell>{book.author}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/6 bg-secondary">
                    Publisher
                  </TableCell>
                  <TableCell>{book.publisher}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/6 bg-secondary">Edition</TableCell>
                  <TableCell>{book.edition}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-1/6 bg-secondary">Pages</TableCell>
                  <TableCell>{book.pages}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="reviews">Coming soon...</TabsContent>
        </Tabs>
      </section>

      {/* Guide to Buy */}

      <section className="bg-primary hidden">
        <div className="mt-10 py-20 w-11/12 lg:container mx-auto grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-primary w-16 h-16 flex items-center justify-center">
              <FaCartShopping className="text-white size-8" />
            </div>
            <p className="font-bengali text-center pt-2 text-2xl font-bold">
              কার্টে যোগ করুন
            </p>
            <p className="font-bengali text-center">
              সংখ্যা নিশ্চিত করে বইটি কার্টে যোগ করুন
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary w-16 h-16 flex items-center justify-center">
              <FaCashRegister className="text-white size-8" />
            </div>
            <p className="font-bengali text-center pt-2 text-2xl font-bold">
              মূল্য পরিশোধ করুন
            </p>
            <p className="font-bengali text-center">
              মূল্য পরিশোধের মাধ্যম ও ট্রানজিকশন আইডি দিয়ে অর্ডার কনফার্ম করুন
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary w-16 h-16 flex items-center justify-center">
              <Package2Icon className="text-white size-8" />
            </div>
            <p className="font-bengali text-center pt-2 text-2xl font-bold">
              সারাদেশে ডেলিভারি
            </p>
            <p className="font-bengali text-center">
              সকল তথ্য ঠিক থাকলে আপনার ঠিকানায় বই পৌছে যাবে দ্রুততম সময়ে
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BookDetails;
