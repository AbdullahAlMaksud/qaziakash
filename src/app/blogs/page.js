"use client";
import { useBlogs } from "@/hooks/use-queries";

const Blogs = () => {
  const { data, isLoading, error } = useBlogs();
  console.log(data);
  if (error) return <div>Error loading blogs</div>;

  return (
    <section className="-mt-16">
      <div className="flex bg-deepblue pt-32 pb-16 flex-col items-center font-english text-white">
        <h2 className="mb-4 text-center text-4xl lg:text-5xl font-bold">
          Book Store{" "}
        </h2>
        <hr className="w-10 h-0.5 bg-primary mb-8 lg:mb-14" />
      </div>
      {data?.length}
    </section>
  );
};

export default Blogs;
