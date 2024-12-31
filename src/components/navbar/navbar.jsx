import Image from "next/image";
import { Button } from "../ui/button";
import Usermenu from "./mobile/usermenu/usermenu";

const Navbar = () => {
  return (
    <section className="bg-transparent fixed w-full min-h-14 max-h-14 z-50 flex items-center">
      <section className="md:container w-11/12 mx-auto px-2 flex items-center justify-between">
        {/* Logo */}

        <div className="">
          <div className="flex items-center gap-2 ">
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
          </div>
        </div>

        {/* Social Links */}

        {/* Nav Links */}
        {/* Button */}
        <section className="flex items-center gap-1">
          <Button className="font-english rounded-none">Get Started</Button>
          <Usermenu />
        </section>
        {/* Navmenu */}
      </section>
    </section>
  );
};

export default Navbar;
