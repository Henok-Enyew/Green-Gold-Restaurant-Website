import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Meal from "./pages/Meal";
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./pages/NavBar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.addEventListener("scroll", AOS.refresh);
    return () => window.removeEventListener("scroll", AOS.refresh);
  }, []);

  return (
    <div className="relative">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="meal" element={<Meal />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
