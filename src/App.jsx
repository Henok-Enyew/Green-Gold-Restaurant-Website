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
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartProvider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.addEventListener("scroll", AOS.refresh);
    return () => window.removeEventListener("scroll", AOS.refresh);
  }, []);

  return (
    <div className="relative">
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <NavBar />
          <Cart />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="menu" element={<Menu />} />
            <Route path="meal" element={<Meal />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
