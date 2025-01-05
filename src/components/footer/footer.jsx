import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image
            height={100}
            width={100}
            className="w-auto h-7"
            src="/fav-icon.svg"
            alt=""
          />
          <span className="font-english text-xl">Qazi Akash</span>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © Copyright 2025. All Rights Reserved.
        </p>
        <div className="flex gap-2 -mx-2">
          <Link href={"/"} className="text-blue-700 text-xl">
            <FaFacebookSquare />
          </Link>
          <Link href={"/"} className="text-purple-800 text-xl">
            <FaInstagramSquare />
          </Link>
          <Link href={"/"} className="text-red-700 text-xl">
            <FaYoutubeSquare />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
