import Author from "./author/author";
import Banner from "./banner/banner";
import Books from "./books/books";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Author />
      <Books/>
    </section>
  );
};

export default HomePage;
