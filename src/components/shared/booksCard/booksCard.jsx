import Image from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const BooksCard = ({ book }) => {
  return (
    <div className="w-full max-h-[29rem] flex flex-col justify-start rounded-none font-bangla">
      <div className="py-4 bg-gray-100 w-full flex items-center justify-center">
        <Image
          unoptimized
          src={book.cover}
          alt={book.title}
          height={100}
          width={100}
          className="lg:w-40 lg:h-60 shadow shadow-black object-cover"
        ></Image>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full mt-3 mb-1">
          <h2 className="text-xl text-deepblue font-bold truncate">
            {book.title}
          </h2>
          <p className="flex items-baseline gap-2 font-[kalpurush] text-primary font-bold">
            <FaBangladeshiTakaSign className="" />{" "}
            <span className="text-xl">{book.price}</span>
          </p>
        </div>
        <p className="pb-2 text-sm text-gray-500">
          {book.description.split(" ")?.slice(0, 9).join(" ")}...
        </p>
        <div className="flex items-center gap-2 mb-5">
          <FaCircle className="text-primary" />
          <span>{book.categories.join(", ")}</span>
        </div>
        <Link
          href={"/"}
          className=" border border-primary px-6 py-3 w-full flex justify-center hover:bg-primary"
        >
          বিস্তারিত দেখুন
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
