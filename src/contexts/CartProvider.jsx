import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider
      value={{ isCartOpen, setCartOpen, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("CartContext used outside");
  return context;
}

export { CartProvider, useCart };
