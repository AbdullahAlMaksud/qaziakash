"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
import { useFetch } from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Blogs = () => {
  const { data: posts, loading, error } = useFetch("/data/BlogsData.json");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (error) return <div>Error loading blogs</div>;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil((posts?.length || 0) / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="-mt-16">
      <section className="flex items-center justify-center w-11/12 mx-auto my-8 lg:my-20">
        <div className="flex flex-col lg:flex-row gap-4 flex-wrap justify-center">
          {currentPosts?.map((post) => (
            <div
              key={post.id}
              className="w-[20rem] bg-white flex flex-col hover:shadow-sm border-2 pb-4"
            >
              <Image
                src={post.coverImage}
                alt=""
                height={100}
                width={100}
                className="w-[20rem] h-40 lg:h-60 object-cover"
              />

              <div className="px-4 lg:px-8 pt-2 lg:py-7 flex flex-col flex-1">
                <p className="lg:mb-3 text-xl lg:text-3xl  text-primary font-bold overflow-clip">
                  {post.title}
                </p>
                <p className="font-inter text-gray-500 flex-1">
                  {post?.excerpt?.slice(0, 100)}...
                </p>
                <div className="flex mt-4 justify-between">
                  <Link
                    className="border-b-2 border-primary text-primary font-bold font-bengali"
                    href={`/blogs/${post.id}`}
                  >
                    আরও পড়ুন
                  </Link>
                  <p className="font-bengali text-sm">
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

      {/* Pagination */}
      <div className="flex justify-center pb-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                className={
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handlePageChange(index + 1)}
                  isActive={currentPage === index + 1}
                  className={"font-['kalpurush]"}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                className={
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Blogs;
