import { NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
// import HoverUnderline from "../components/HoverUnderline";
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50  flex items-center justify-between p-4 bg-transparent text-primary  transition-all duration-200 font-extralight text-lg ">
      <p>Green Gold</p>
      <div className="flex space-x-8 bg-white bg-opacity-15 py-[1px] px-3 backdrop-blur-md">
        <NavLink to="/" className="nav-link ">
          Home
        </NavLink>
        <NavLink to="/menu" className="nav-link">
          Menu
        </NavLink>
        <NavLink to="/about-us" className="nav-link">
          About us
        </NavLink>
        <NavLink to="/contact-us" className="nav-link">
          Contact us
        </NavLink>
      </div>
      <div className="flex space-x-4 py-[1px] px-4 backdrop-blur-md">
        <button className="flex items-center justify-center">
          <GiShoppingCart className="text-2xl" />
        </button>
        <button className="bg-primary text-gray-700 px-4  transition-all duration-300 hover:bg-primary-bold">
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
