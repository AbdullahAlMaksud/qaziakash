"use client";

import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const BookDetails = () => {
  const { id } = useParams();
  const { data: posts, loading, error } = useFetch("/data/BlogsData.json");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className=" -mt-16">
        <div className="h-[calc(100vh-240px)] bg-deepblue text-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  const post = posts?.find((post) => post.id === parseInt(id));

  if (error) return <div>Error loading book details</div>;
  if (!post) return <div>Book not found</div>;

  return (
    <section className="-mt-16">
      <div className="bg-deepblue py-8 mb-5 text-white"></div>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Book Image */}
            <Image
              src={post.coverImage}
              alt=""
              height={100}
              width={100}
              className="w-[20rem] h-60 object-cover"
            />

            <div className="px-8 py-7 flex flex-col flex-1">
              <p className="mb-3 text-2xl h-[3.9rem] text-deepblue font-bold overflow-clip">
                {post.title}
              </p>
              <p className="font-inter text-gray-500 flex-1">
                {post?.excerpt?.slice(0, 100)}...
              </p>
              <div className="flex mt-4 justify-between">
                <Link
                  className="border-b-2 border-deepblue text-deepblue font-bold font-bangla"
                  href={"/"}
                >
                  আরও পড়ুন
                </Link>
                <p className="font-bangla text-sm">
                  {post?.author} -{" "}
                  <span className="font-['kalpurush']">
                    {formatDate(post.publishDate)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BookDetails;
