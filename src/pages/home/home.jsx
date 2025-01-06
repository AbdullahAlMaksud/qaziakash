import Author from "./author/author";
import Banner from "./banner/banner";
import BannerAd from "./bannerAd/bannerAd";
import Blogs from "./blogs/blogs";
import Books from "./books/books";
import Newsletter from "./newsletter/newsletter";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Author />
      <Books />
      <BannerAd/>
      <Blogs />
      <Newsletter />
    </section>
  );
};

export default HomePage;
