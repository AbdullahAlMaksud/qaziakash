"use client";

import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
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
        <div className="h-[calc(100vh-240px)] bg-primary text-white flex items-center justify-center">
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
      <div className="bg-primary pt-20 lg:pt-32 pb-4 lg:pb-16 lg:mb-20 text-white">
        <h2 className="font-bengali text-2xl px-4 lg:text-3xl text-center">
          {post.title}
        </h2>
        <hr className="w-16 h-0.5 bg-primary mx-auto my-3" />
      </div>

      <section>
        <div className="lg:w-11/12 lg:container mx-auto">
          <div className="flex flex-col lg:w-10/12 mx-auto">
            <Image
              unoptimized
              src={post.coverImage}
              alt=""
              height={100}
              width={100}
              className="lg:h-96 h-52 w-full mx-auto object-cover object-top"
            />
            {/* Book Image */}

            <div className="mt-4 bg-lightblue p-4 mx-4 lg:mx-0">
              <p className="font-bengali text-sm">
                {post?.author} -{" "}
                <span className="font-['kalpurush']">
                  {" "}
                  প্রকাশিত: {formatDate(post.publishDate)}
                </span>
              </p>
            </div>
            <div className="py-4 mx-4 lg:mx-0 flex flex-col flex-1">
              <p className="font-bengali flex-1 text-justify">
                {post?.excerpt}
              </p>
              <div className="flex mt-4 justify-between"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BookDetails;
