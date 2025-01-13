"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const UserNavMenu = () => {
  const path = usePathname();

  return (
    <ul className="hidden font-english text-white md:flex items-center gap-1 font-light">
      <li>
        <Link
          href={"/"}
          className={
            path === "/"
              ? "border-b border-primary px-2 py-2 text-primary"
              : " px-2 py-2 hover:text-primary"
          }
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href={"/books"}
          className={
            path === "/books"
              ? "border-b border-primary px-2 py-2 text-primary"
              : " px-2 py-2 hover:text-primary"
          }
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          href={"/blogs"}
          className={
            path === "/blogs"
              ? "border-b border-primary px-2 py-2 text-primary"
              : " px-2 py-2 hover:text-primary"
          }
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className={
            path === "/about"
              ? "border-b border-primary px-2 py-2 text-primary"
              : "px-2 py-2 hover:text-primary"
          }
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/contact"}
          className={
            path === "/contact"
              ? "border-b border-primary px-2 py-2 text-primary"
              : "px-2 py-2 hover:text-primary"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default UserNavMenu;
