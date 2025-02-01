"use client";
import { LibraryBig } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import UserNavMenu from "./desktop/usernavmenu";
import UserMenu from "./mobile/usermenu/usermenu";
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
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarClass = () => {
    return scrolled
      ? "bg-secondary/40 backdrop-blur-md rounded-b-md mx-auto transition-colors duration-300 px-1 lg:py-3 py-2 max-w-[22rem] md:max-w-7xl mx-auto"
      : `bg-transparent duration-300 max-w-screen-2xl py-3 w-full`;
  };

  return (
    <nav
      className={
        path === "/"
          ? `sticky top-0 left-0 z-50 w-full text-primary-foreground  ${getNavbarClass()}`
          : `sticky top-0 left-0 z-50 w-full text-primary-foreground  ${getNavbarClass()}  shadow-sm shadow-black/10`
      }
    >
      <section className="md:container w-11/12 mx-auto lg:px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Link href="/" className="flex items-center gap-2 ">
            <p>
              <LibraryBig className="text-primary size-7" />
            </p>
            <h2 className="font-bengali text-secondary-foreground font-bold text-xl hover:text-black hover:scale-125 duration-300">
              কাজী আকাশ
            </h2>
          </Link>

          <div>
            <ul className="hidden">
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
          <Button className="font-english rounded-none hidden">
            Get Started
          </Button>
          <UserMenu />
        </section>
        {/* Navmenu */}
      </section>
    </nav>
  );
};

export default Navbar;
