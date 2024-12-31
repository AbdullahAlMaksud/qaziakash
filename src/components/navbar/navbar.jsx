import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../ui/button";
import Usermenu from "./mobile/usermenu/usermenu";
import UserNavMenu from "./pc/usernavmenu";
// import { UserNavMenu } from "./pc/usernavmenu";

const Navbar = () => {
  return (
    <section className="bg-transparent fixed w-full min-h-14 max-h-14 z-50 flex items-center">
      <section className="md:container w-11/12 mx-auto px-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
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
