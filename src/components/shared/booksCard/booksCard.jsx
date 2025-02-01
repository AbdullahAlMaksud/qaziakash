import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ book }) => {
  return (
    <Link
      href={`/books/${book.id}`}
      className="block flex flex-col items-center justify-center"
    >
      <div className="w-40 lg:w-60 max-h-[29rem] flex flex-col rounded  justify-start shadow-sm shadow-black/30 my-2 font-bengali hover:shadow-lg transition-shadow duration-300">
        <div className="py-6 w-full flex items-center justify-center">
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
          <div className="flex items-center justify-center w-full mt-3 mb-1 flex-col">
            <p>{book.categories[0]}</p>
            <h2 className="text-md lg:text-xl text-secondary-foreground font-bold truncate text-center">
              {book.title}
            </h2>
          </div>

          <div className="mb-2 items-center lg:mb-4 flex justify-center">
            <p className="text-xl font-['kalpurush']">{book.price} টাকা</p>
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
