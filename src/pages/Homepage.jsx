import Footer from "../components/Footer";
import Hero from "./Hero";
import OurSpecials from "./OurSpecials";
import Coffee from "./Coffee";

function Homepage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <OurSpecials />
      <Coffee />
      <Footer />
    </div>
  );
}

export default Homepage;
