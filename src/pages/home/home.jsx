import Author from "./author/author";
import Banner from "./banner/banner";
import Blogs from "./blogs/blogs";
import BookReview from "./bookReview/bookReview";
import Books from "./books/books";
import BooksSlider from "./books_slider/booksSlider";
import Publishers from "./publishers/publishers";
import VideoGallery from "./videoGallary/videoGallary";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <div className="relative py-14">
        <div className="min-h-20 min-w-44 border-2 border-r-0 border-t-0 border-primary top-0 -z-0 left-96 absolute"></div>
        <Books />
      </div>

      <div className="bg-secondary relative rounded-tr-3xl py-14">
        <div className="min-h-20 min-w-44 border-2 border-l-0 border-t-0 border-primary top-0 -z-0 right-96 absolute"></div>
        <Blogs />
      </div>

      <div className="bg-secondary/50 relative rounded-tr-3xl py-14">
        <div className="min-h-20 min-w-44 border-2 border-l-0 border-t-0 border-primary top-0 -z-0 right-96 absolute"></div>
        <div className="min-h-20 min-w-44 border-2 border-r-0 border-t-0 border-primary top-0 -z-0 left-96 absolute"></div>

        <BooksSlider />
      </div>

      <div className="relative rounded-tr-3xl py-14">
        <div className="min-h-20 min-w-40 border-2 border-r-0 border-t-0 border-primary top-0 -z-0 left-96 absolute"></div>

        <Publishers />
      </div>

      <div className="relative rounded-tr-3xl py-14">
        {/* <div className="min-h-20 min-w-52 border-2 border-r-0 border-t-0 border-primary top-0 -z-0 left-96 absolute"></div> */}
        <div className="min-h-20 min-w-52 border-2 border-l-0 border-t-0 border-primary top-0 -z-0 right-96 absolute"></div>

        <BookReview />
      </div>

      <div className="relative rounded-tr-3xl py-14">
        <div className="min-h-20 min-w-52 border-2 border-r-0 border-t-0 border-primary top-0 -z-0 left-96 absolute"></div>
        <div className="min-h-20 min-w-52 border-2 border-l-0 border-t-0 border-primary top-0 -z-0 right-96 absolute"></div>

        <VideoGallery />
      </div>

      <div className="relative rounded-tr-3xl py-14 bg-secondary">
        <Author />
      </div>

      {/* <BannerAd /> */}
      {/* <Newsletter /> */}
    </section>
  );
};

export default HomePage;
