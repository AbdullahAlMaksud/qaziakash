"use client";
import TitleOne from "@/components/shared/titleOne/titleOne";
import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";

const Blogs = () => {
  const { data: posts, loading, error } = useFetch("/data/BlogsData.json");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <section className="font-bangla bg-lightblue">
      <div className="py-8 lg:py-32 w-11/12 md:container flex flex-col justify-center items-center mx-auto">
        <TitleOne title={"Author's Blog"} />
        <section className="flex  items-center justify-center">
          <div className="flex flex-col lg:flex-row gap-2">
            {posts?.slice(3)?.map((post) => (
              <section
                key={post.id}
                className="w-[20rem] bg-white flex flex-col hover:shadow-sm"
              >
                <img
                  src={post.coverImage}
                  alt=""
                  className="w-[20rem] h-60 object-cover"
                />

                <div className="px-8 py-7 flex flex-col flex-1">
                  <Link
                    href={`/blogs/${post.id}`}
                    className="mb-3 text-2xl h-[3.9rem] text-deepblue font-bold overflow-clip"
                  >
                    {post.title}
                  </Link>
                  <p className="font-bangla text-gray-500 flex-1">
                    {post.excerpt?.slice(0, 100)}...
                  </p>
                  <div className="flex mt-4 justify-between">
                    <Link
                      className="border-b-2 border-deepblue text-deepblue font-bold font-bangla"
                      href={`/blogs/${post.id}`}
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
              </section>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blogs;
