"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    menuName: "হোম",
    menuLink: "/",
  },
  {
    menuName: "বইপত্র",
    menuLink: "/books",
  },
  {
    menuName: "লেখালেখি",
    menuLink: "/blogs",
  },
  {
    menuName: "পরিচিতি",
    menuLink: "/about",
  },
  {
    menuName: "যোগাযোগ",
    menuLink: "/contact",
  },
];

const UserNavMenu = () => {
  const path = usePathname();

  return (
    <ul className="hidden font-english text-secondary-foreground md:flex items-center gap-1 font-light">
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
            {path === item.menuLink ? <></> : null}
            {item.menuName}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UserNavMenu;
