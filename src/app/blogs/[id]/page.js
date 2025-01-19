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
      <div className="bg-deepblue pt-32 pb-16 mb-20 text-white">
        <h2 className="font-bangla text-3xl text-center">{post.title}</h2>
        <hr className="w-16 h-0.5 bg-primary mx-auto my-3" />
      </div>
      <section>
        <div className="w-11/12 lg:container mx-auto">
          <div className="flex flex-col w-10/12 mx-auto">
            <Image
              unoptimized
              src={post.coverImage}
              alt=""
              height={100}
              width={100}
              className="h-96 w-full mx-auto object-cover object-top"
            />
            {/* Book Image */}

            <div className="mt-4 bg-lightblue p-4">
              <p className="font-bangla text-sm">
                {post?.author} -{" "}
                <span className="font-['kalpurush']">
                  {" "}
                  প্রকাশিত: {formatDate(post.publishDate)}
                </span>
              </p>
            </div>
            <div className="py-4 flex flex-col flex-1">
              <p className="font-bangla flex-1 text-justify">{post?.excerpt}</p>
              <div className="flex mt-4 justify-between"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BookDetails;
