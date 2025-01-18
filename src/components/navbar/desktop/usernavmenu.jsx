"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    menuName: "Home",
    menuLink: "/",
  },
  {
    menuName: "Books",
    menuLink: "/books",
  },
  {
    menuName: "Blogs",
    menuLink: "/blogs",
  },
  {
    menuName: "About",
    menuLink: "/about",
  },
  {
    menuName: "Contact",
    menuLink: "/contact",
  },
];

const UserNavMenu = () => {
  const path = usePathname();

  return (
    <ul className="hidden font-english text-white md:flex items-center gap-1 font-light">
      {menu.map((item, index) => (
        <li key={index}>
          <Link
            href={item.menuLink}
            className={
              path === item.menuLink
                ? "px-2 py-2 text-primary relative"
                : " px-2 py-2 hover:text-primary"
            }
          >
            {path === item.menuLink ? (
              <>
                <span className="absolute left-0 w-full -z-0  h-3 top-2 bg-white/10"></span>
                <span className="absolute -left-1.5 w-full -z-10  h-3 top-1.5 bg-deepblue"></span>
              </>
            ) : null}
            {item.menuName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserNavMenu;
