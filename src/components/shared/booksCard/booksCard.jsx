import Image from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const BooksCard = ({ book }) => {
  return (
    <Link href={`/books/${book.id}`} className="block mt-4">
      <div className="w-40 max-h-[29rem] flex flex-col border-2 justify-start rounded-none font-bangla hover:shadow-lg transition-shadow duration-300">
        <div className="py-4 bg-secondary w-full flex items-center justify-center">
          <Image
            unoptimized
            src={book.cover}
            alt={book.title}
            height={100}
            width={100}
            className="w-20 lg:w-40 lg:h-60 shadow shadow-black object-cover"
          />
        </div>
        <div className="w-full px-2">
          <div className="flex items-center justify-between w-full mt-3 mb-1">
            <h2 className="text-md lg:text-xl text-deepblue font-bold truncate">
              {book.title}
            </h2>
            <p className="flex items-baseline gap-2 font-[kalpurush] text-primary font-bold">
              <FaBangladeshiTakaSign className="" />
              <span className="text-xl">{book.price}</span>
            </p>
          </div>
          <p className="pb-2 text-sm text-gray-500">
            {book.description.split(" ")?.slice(0, 7).join(" ")}...
          </p>
          <div className="flex items-center gap-2 mb-2 lg:mb-8">
            <FaCircle className="text-primary" />
            <span>{book.categories.join(", ")}</span>
          </div>
          <div className="border hidden border-primary px-6 py-2 w-full justify-center hover:bg-primary">
            বিস্তারিত দেখুন
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
