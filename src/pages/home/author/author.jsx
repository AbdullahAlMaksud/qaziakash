import Image from "next/image";

const Author = () => {
  return (
    <section className="font-bangla w-11/12 mx-auto lg:container lg:flex lg:justify-between lg:items-center lg:gap-20 mt-10">
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            className="w-[15rem] lg:w-[25rem] lg:h-[27rem] h-[16rem] object-cover"
            alt="Qazi Akash"
            width={100}
            height={100}
            src={"/qazi_akash/IMG_20231207_012144_855.jpg"}
          ></Image>
          <div className="min-w-[15rem] h-[16rem] lg:min-w-[25rem] lg:h-[28rem] lg:border-[10px]  border-[7px] border-primary absolute top-5 left-5 -z-10"></div>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-2/3">
        <h2 className="text-3xl text-blue-950 font-bold">কাজী আকাশ</h2>
        <hr className="bg-primary h-0.5 w-14" />
        <p className="text-justify pt-3 text-lg">
          কাজী আকাশের জন্ম গোপালগঞ্জের কোটালীপাড়া উপজেলার মান্দ্রা গ্রামে। পড়ালেখা গণিতে। বর্তমানে দেশের সবচেয়ে জনপ্রিয় বিজ্ঞানবিষয়ক মাসিক ম্যাগাজিন বিজ্ঞানচিন্তা সম্পাদনার সঙ্গে জড়িত। নিয়মিত লেখেন প্রথম আলো এবং জনপ্রিয় কিশোর ম্যাগাজিন কিশোর আলোয়। গণিত, বিজ্ঞান, ইতিহাস, কিশোর সাহিত্যসহ নানা বিষয়ে তাঁর লেখালেখি।
        </p>
        <div className="flex items-center gap-4 justify-between my-4">
          <div className="border-r-2 w-full">
            <p className="text-3xl">৩</p>
            <p>প্রকাশিত বই</p>
          </div>
          <div className="border-r-2 w-full">
            <p className="text-3xl">৪৫০০০</p>
            <p>প্রায় শব্দ</p>
          </div>
          <div className="w-full">
            <p className="text-3xl">১২১</p>
            <p>ব্লগ সংখ্যা</p>
          </div>
        </div>

        <div className="bg-blue-950 flex items-center text-white p-5 justify-center gap-4 lg:w-fit">
          <Image
            className="h-24 object-cover w-16"
            src={"/books_cover/Sudoku.jpg"}
            alt="QR Code"
            width={100}
            height={100}
          ></Image>
          <div>
            <h2 className="text-primary ">Qazi Akash</h2>
            <h2 className="font-light">Email: qaziakashmath@gmail.com</h2>
            <p className="font-light">Phone: +001100110011</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
