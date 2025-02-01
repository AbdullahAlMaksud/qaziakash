import Link from "next/link";

const AuthorContactInfo = ({ contactData, title, description }) => {
  return (
    <div className="lg:w-1/2">
      <h3 className="font-english text-3xl font-bold text-primary">{title}</h3>
      <hr className="w-14 h-0.5 bg-primary my-4" />
      <p className="mb-4 font-inter text-base text-gray-400">{description}</p>
      <div className="flex flex-col gap-2">
        {contactData.map((item, index) => (
          <div key={index} className="flex gap-4 font-english">
            <div className="border border-primary rounded w-10 h-10 text-xl flex justify-center items-center text-primary">
              {item.icon}
            </div>
            <div>
              <Link
                href={item.link}
                className="text-xl lg:text-lg font-bold hover:underline"
              >
                {item.title}
              </Link>
              <p className="text-xs font-inter text-gray-600">
                {item.shortLink}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorContactInfo;
