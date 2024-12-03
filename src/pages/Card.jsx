import { NavLink } from "react-router-dom";

function Card({ name, price }) {
  return (
    <NavLink
      to={"/menu"}
      className=" border-[1px] border-primary duration-500 transition-all bg-primary hover:scale-105 bg-opacity-10 w-56 border-opacity-30 rounded-2xl flex-col justify-between pb-4 overflow-hidden z-30"
    >
      <img src="src/assets/shiro-feses.jpg" alt="" className="w-full h-36 " />
      <div className="px-2 mt-5">
        <p className=" mb-6 text-primary  ">{name}</p>
        <div className="flex justify-between items-center mt-2  ">
          <p className="text-center text-white text-xl  ">{price} ETB</p>
          <button className=" bg-primary  px-2 py-[1px] text-md flex items-center justify-center text-black text-md font-light transition-all duration-300 hover:bg-primary-bold hover:text-black rounded-lg">
            + add to cart
          </button>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
