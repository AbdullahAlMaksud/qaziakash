"use client";
import TitleOne from "@/components/shared/titleOne/titleOne";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://dev.to/api/articles?username=tiaeastwood&per_page=8"
      );
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(posts);
  return (
    <section className="font-english bg-lightblue">
      <div className="py-32 w-11/12 md:container flex flex-col justify-center items-center mx-auto">
        <TitleOne title={"Author's Blog"} />
        <section className="flex items-center justify-center">
          <div className="flex gap-2">
            {posts.slice(4, 7).map((post) => (
              <div
                key={post.id}
                className="w-[20rem] bg-white flex flex-col hover:shadow-sm"
              >
                <img
                  unoptimized={true}
                  src={post.cover_image}
                  alt=""
                  className="w-[20rem] h-60 object-cover"
                />

                <div className="px-8 py-7 flex flex-col flex-1">
                  <p className="mb-3 text-2xl h-[3.9rem] text-deepblue font-bold overflow-clip">
                    {post.title}
                  </p>
                  <p className="font-inter text-gray-500 flex-1">
                    {post.description}
                  </p>
                  <div className="flex mt-4 justify-between">
                    <Link
                      className="border-b-2 border-deepblue text-deepblue font-bold font-bangla"
                      href={"/"}
                    >
                      আরও পড়ুন
                    </Link>
                    <p className="font-bangla text-sm">
                      {post?.user?.name.split(" ")[0]} -{" "}
                      <span className="font-['kalpurush']">
                        {formatDate(post.created_at)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blogs;
