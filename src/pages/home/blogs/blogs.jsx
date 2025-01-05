"use client";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

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
    <div className="font-english w-11/12 mx-auto lg:container mb-5">
      <h1 className="text-3xl pb-4 text-blue-950 font-bold">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {posts.map((post) => (
          <div key={post.id} className="relative lg:h-60">
            <div className="absolute bg-gradient-to-b from-slate-700/10 to-slate-900 flex lg:h-60 h-full w-full items-end bottom-0 font-extrabold text-lg px-2 py-3 text-center leading-tight text-white">
              <p>{post.title}</p>
            </div>
            <div className=""></div>
            <img
              src={post.cover_image}
              alt=""
              className="lg:h-60 w-full object-cover"
            />
            {/* <p>{post.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
