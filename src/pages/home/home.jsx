import Author from "./author/author";
import Banner from "./banner/banner";
import BannerAd from "./bannerAd/bannerAd";
import Blogs from "./blogs/blogs";
import Books from "./books/books";
import BooksSlider from "./books_slider/booksSlider";
import Newsletter from "./newsletter/newsletter";
import Publishers from "./publishers/publishers";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Author />
      <Books />
      <BannerAd />
      <BooksSlider />
      <Blogs />
      <Publishers />
      <Newsletter />
    </section>
  );
};

export default HomePage;
