"use client";
import TitleOne from "@/components/shared/titleOne/titleOne";
import { useFetch } from "@/hooks/useFetch";
import Link from "next/link";
import { FaClock } from "react-icons/fa6";

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
    <section className="font-bengali">
      <div className="w-11/12 md:container flex flex-col justify-center items-center mx-auto">
        <TitleOne title={"লেখালেখি"} />
        <section className="flex  items-center justify-center">
          <div className="flex flex-col lg:flex-row justify-between gap-2">
            {posts?.slice(2)?.map((post) => (
              <section
                key={post.id}
                className="w-[20rem] bg-white rounded flex flex-col hover:shadow-sm"
              >
                <img
                  src={post.coverImage}
                  alt=""
                  className="w-[20rem] h-60 object-cover rounded-t"
                />

                <div className="px-8 py-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <p className="bg-purple-500 px-4 rounded-sm w-fit text-white mb-2">
                      {post.subhead}
                    </p>
                    <p className="flex items-center text-gray-500 gap-2 font-['kalpurush']">
                      <FaClock /> {post.readingTime} {"মিনিট"}
                    </p>
                  </div>
                  <Link
                    href={`/blogs/${post.id}`}
                    className="mb-3 text-2xl h-[3.9rem] text-deepblue hover:underline font-bold overflow-clip"
                  >
                    {post.title}
                  </Link>
                  <p className="font-bengali text-gray-500 flex-1 text-justify">
                    {post.excerpt?.slice(0, 100)}...
                  </p>
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
