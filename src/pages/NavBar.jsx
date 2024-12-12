import { NavLink } from "react-router-dom";
import { GiForkKnifeSpoon, GiKnifeFork, GiShoppingCart } from "react-icons/gi";
import { useState } from "react";
import { useCart } from "../contexts/CartProvider";
// import HoverUnderline from "../components/HoverUnderline";
function NavBar() {
  const { setCartOpen } = useCart();
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full  flex items-center justify-between py-2 px-1 lg:p-4  bg-transparent text-primary  transition-all duration-200 font-extralight text-lg z-[47]  ">
      <NavLink to={"/"} className="z-50">
        <img
          src="/logo.png"
          alt="Logo of Green Gold Restaurant"
          className="w-28 lg:w-32"
        />
      </NavLink>
      <div
        className={`${showNav ? "fixed" : "hidden"} 
         w-full h-screen top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm  z-[45]`}
        onClick={() => setShowNav(false)}
      ></div>
      <div
        //   className={`absolute top-0 left-0 flex flex-col h-96 items-center justify-center gap-y-5 lg:flex-row lg:   lg:space-x-8 bg-white bg-opacity-15 py-[1px] px-3 backdrop-blur-md transition-all duration-300 ${
        //     showNav ? "translate-x-0" : "-translate-x-full"
        //   }`}
        // >
        className={`absolute top-0 left-1/2 flex flex-col h-96 items-center justify-center gap-y-5 w-3/4  
        bg-black bg-opacity-50 py-[1px] px-3 backdrop-blur-md transition-all duration-300 
        ${
          showNav
            ? "translate-y-0 -translate-x-1/2 top-28"
            : "-top-full -translate-y-full -translate-x-10   "
        }
       lg:translate-y-0 lg:w-auto lg:flex-row lg:gap-y-0 lg:h-auto lg:static lg:translate-x-0 lg:justify-center lg:space-x-8 z-50`}
      >
        <NavLink
          onClick={() => {
            setShowNav(false);
          }}
          to="/"
          className="nav-link "
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            setShowNav(false);
          }}
          to="/menu"
          className="nav-link"
        >
          Menu
        </NavLink>
        <NavLink
          onClick={() => {
            setShowNav(false);
          }}
          to="/about-us"
          className="nav-link"
        >
          About us
        </NavLink>
        <NavLink
          onClick={() => {
            setShowNav(false);
          }}
          to="/contact-us"
          className="nav-link"
        >
          Contact us
        </NavLink>
      </div>
      <div className="flex lg:space-x-4 space-x-2 py-[1px] px-2 lg:px-4 backdrop-blur-md bg-black bg-opacity-50 z-50">
        <button
          className="flex items-center justify-center outline-none border-none transition-all duration-300 "
          onClick={() => setCartOpen(true)}
        >
          <GiShoppingCart className="text-2xl size-8 sm:size-10 lg:size-8 hover:fill-primary-bold" />
        </button>
        <NavLink
          to={"/login"}
          className="bg-primary text-gray-700 px-2 lg:px-4  transition-all duration-300 hover:bg-primary-bold "
        >
          Login
        </NavLink>
        <button
          className=" lg:hidden transition-all duration-300 border-none outline-none"
          onClick={() => setShowNav((s) => !s)}
        >
          {showNav ? (
            <GiKnifeFork className="fill-primary hover:fill-primary-bold text-lg size-7 sm:size-11" />
          ) : (
            <GiForkKnifeSpoon className="fill-primary hover:fill-primary-bold rotate-90 size-7 sm:size-11" />
          )}
        </button>
      </div>
    </nav>
  );
}
153146896;

export default NavBar;
