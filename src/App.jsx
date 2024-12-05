import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Meal from "./pages/Meal";
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./pages/NavBar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
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
