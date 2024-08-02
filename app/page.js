import Warning from "./components/warning";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Info from "./components/info";
import Casting from "./components/casting";
import Category from "./components/category";
import Bestseller from "./components/bestseller";
import Newsletter from "./components/newsletter";
import Testimonials from "./components/testimonials";
import Social from "./components/social";
import Footer from "./components/footer";

const Home = () => {
  return (
    <>
      <Warning />
      <Header />
      <Navbar />
      <Info />
      <Casting />
      <Category />
      <Bestseller />
      <Newsletter />
      <Testimonials />
      <Social />
      <Footer />
    </>
  );
};

export default Home;
