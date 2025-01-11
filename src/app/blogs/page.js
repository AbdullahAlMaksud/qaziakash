"use client";
import { useBlogs } from "@/hooks/use-queries";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const { data: posts, isLoading, error } = useBlogs();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (error) return <div>Error loading blogs</div>;

  return (
    <section className="-mt-16">
      <div className="bg-deepblue py-32 text-white">
        <div className="flex flex-col items-center font-english">
          <h2 className="mb-4 text-center text-4xl lg:text-5xl font-bold">
            Blogs
          </h2>
          <hr className="w-14 h-0.5 bg-primary mb-4 lg:mb-4" />
          <p className="text-center w-1/3 mx-auto">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </p>
        </div>
      </div>

      <section className="flex  items-center justify-center w-11/12 mx-auto my-20">
        <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center">
          {posts?.map((post) => (
            <div
              key={post.id}
              className="w-[20rem] bg-white flex flex-col hover:shadow-sm"
            >
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
          ))}
        </div>
      </section>
    </section>
  );
};

export default Blogs;
