"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import UserNavMenu from "./desktop/usernavmenu";
import Usermenu from "./mobile/usermenu/usermenu";
const pathColors = new Map([
  ["/about", "bg-purple-700"],
  ["/contact", "bg-green-700"],
  ["/services", "bg-orange-700"],
  ["/blog", "bg-red-700"],
]);
const Navbar = () => {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarClass = () => {
    if (path === "/") {
      return scrolled
        ? "bg-black/20 backdrop-blur-md rounded-b-md mx-auto transition-colors duration-300 w-11/12 fixed left-1/2 -translate-x-1/2 top-0"
        : "bg-transparent w-full fixed";
    }
    return `${
      pathColors.get(path) || "bg-blue-700"
    } transition-colors duration-300`;
  };

  return (
    <section
      className={`${getNavbarClass()} min-h-14 max-h-14 z-50 flex items-center`}
    >
      <section className="md:container w-11/12 mx-auto px-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Link href="/" className="flex items-center gap-2 ">
            <Image
              src="/fav-icon.svg"
              width={40}
              height={100}
              alt="icon"
              className="w-7"
            ></Image>
            <h2 className="font-english text-white font-medium text-xl">
              Qazi Akash
            </h2>
          </Link>

          <div>
            <ul className="hidden lg:flex items-center gap-1">
              <li>
                <Button
                  className="rounded-none px-2.5 hover:bg-primary bg-white"
                  href="https://www.facebook.com/qazi.akash.908"
                  target="_blank"
                >
                  <FaFacebookF />
                </Button>
              </li>
              <li>
                <Button
                  className="rounded-none px-2.5 hover:bg-primary bg-white"
                  href="https://www.facebook.com/qazi.akash.908"
                  target="_blank"
                >
                  <FaTwitter />
                </Button>
              </li>
              <li>
                <Button
                  className="rounded-none px-2.5 hover:bg-primary bg-white"
                  href="https://www.facebook.com/qazi.akash.908"
                  target="_blank"
                >
                  <FaYoutube />
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Nav Links */}
        {/* Button */}
        <section className="flex items-center gap-1">
          <UserNavMenu />
          <Button className="font-english rounded-none">Get Started</Button>
          <Usermenu />
        </section>
        {/* Navmenu */}
      </section>
    </section>
  );
};

export default Navbar;
