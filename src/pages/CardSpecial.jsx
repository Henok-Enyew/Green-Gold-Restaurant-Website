import { NavLink } from "react-router-dom";

function CardSpecial({ name, imgSrc, price, imgStyle = "" }) {
  return (
    <NavLink
      to="/menu"
      className=" border-[1px] mx-auto  border-primary duration-500 transition-all bg-primary hover:scale-105 bg-opacity-10 w-64  border-opacity-30  px-5 rounded-2xl flex-col justify-between pb-4 z-30"
    >
      <img
        src={`${imgSrc}`}
        alt="Specials"
        className={`w-60  mx-auto ease-out duration-500  -translate-y-1/3 ${imgStyle} `}
      />
      <div>
        <p className=" mb-1 -mt-8 text-primary text-lg ">{name}</p>
        <div className="flex justify-between items-center mt-2  ">
          <p className="text-center text-white text-xl  ">{price} ETB</p>
          <button className=" border-[1px] border-primary-bold w-6 h-6 p-4 text-xl flex items-center justify-center text-primary text-md font-extralight transition-all duration-300 hover:bg-primary-bold hover:text-gray-950 rounded-full">
            +
          </button>
        </div>
      </div>
    </NavLink>
  );
}

export default CardSpecial;
