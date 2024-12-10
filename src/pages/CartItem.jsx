import { RiDeleteBinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function CartItem() {
  return (
    <NavLink className="bg-white hover:bg-opacity-15 transition-all duration-300 relative bg-opacity-10 px-3 py-2  flex  gap-x-6 lg:gap-x-12 ">
      <img
        src="img/shiro-feses.jpg"
        alt="Shiro feses Green Gold Restaurant"
        className="w-24 items-center"
      />
      <button className="absolute top-2 right-2 text-4xl text-gray-300 font-thin hover:text-gray-200">
        <RiDeleteBinLine
          size={24}
          className="fill-gray-300 hover:fill-red-600"
        />
      </button>
      <div className="flex flex-col justify-between ">
        <p className="text-gray-200 text-sm lg:text-md font-extralight">
          Shiro Feses - Shiroasdasda
        </p>
        <div className="flex justify-between">
          <div className="flex gap-x-2">
            <button className="text-xl text-white">-</button>
            <input
              type="number"
              name=""
              id=""
              className="w-12 outline-none text-right"
            />
            <button className="text-xl text-white">+</button>
          </div>
          <p className="text-gray-200 font-bold text-xl  lg:text-xl absolute bottom-0 right-2  ">
            100 ETB
          </p>
        </div>
      </div>
    </NavLink>
  );
}

export default CartItem;
