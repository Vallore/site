import Warning from "../components/warning";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Social from "../components/social";
import Footer from "../components/footer";
import Related from "../components/related";
import Privacy from "../components/privacy-policy";
import Delivery from "../components/delivery";

export default function Products() {
  
  return (
    <>
      <Warning />
      <Header />
      <Navbar />
      <Delivery />


      <Related />
      <Social />
      <Footer />
    </>
  );
}
