import { RiDeleteBinLine } from "react-icons/ri";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";

function Cart() {
  const { isCartOpen, setCartOpen } = useCart();
  return (
    <>
      <div
        className={`${isCartOpen ? "fixed" : "hidden"} 
         w-full h-screen top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm  z-[45]`}
        onClick={() => setCartOpen(false)}
      ></div>
      <div
        className={`h-screen  shadow-2xl w-full sm:w-[60%] lg:w-[36%] fixed right-0 z-50 bg-bg-primary py-2 px-4 border-l-4 border-primary rounded-l-3xl transition-all duration-500 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-1 right-3 text-4xl text-gray-300 font-thin hover:text-gray-200"
          onClick={() => setCartOpen(false)}
        >
          &times;
        </button>
        <p className="text-center text-primary text-xl font-extralight">Cart</p>
        <p className="text-center text-primary text-xl ">Your set of meals</p>
        <div className="py-4 relative flex flex-col gap-y-3 overflow-y-scroll h-[90%]">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </>
  );
}

// 0716006683

export default Cart;
