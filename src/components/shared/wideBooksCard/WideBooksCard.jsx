import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WideBooksCard = ({ book }) => {
  return (
    <div className="min-w-full shadow border flex items-start gap-4 rounded">
      <Image
        src={book.cover}
        alt={book.title}
        className="w-auto h-80 rounded-l"
        width={100}
        height={100}
      />
      <div className="pr-4 pt-4 flex-1 ">
        <div className="flex-1 flex flex-col justify-between">
          <p className="text-xs">{book.categories[0]}</p>
          <h2 className="text-primary text-2xl font-bold">{book.title}</h2>
          <p>{book.author}</p>
          <p className="line-clamp-2 text-justify pt-4">
            {book.shortDescription}
          </p>
        </div>

        {book.purchaseLink && (
          <p className="mt-4 font-bold">বইটি কেনার লিংক:</p>
        )}
        <div className="flex flex-wrap gap-2">
          {book?.purchaseLink?.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="w-16 flex justify-center h-8 items-center bg-white text-primary rounded shadow-lg hover:scale-110 flex-wrap"
            >
              <Image
                src={link.logo}
                width={100}
                height={100}
                alt={`${index}logo`}
                className="h-6 w-auto"
              />
            </Link>
          ))}
        </div>

        <Link
          className="flex items-center hover:text-white border border-primary shadow hover:shadow-inner hover:shadow-black/20  hover:bg-primary px-4 py-2 rounded-full  justify-between mt-4"
          href={`/books/${book.id}`}
        >
          বিস্তারিত দেখুন <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default WideBooksCard;
