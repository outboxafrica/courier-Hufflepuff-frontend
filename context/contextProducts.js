import React, { createContext, useContext, useState } from "react";
import { addToCartData } from "../utils/AddToCartData";

const ContextProducts = createContext();

export function CartProducts() {
  return useContext(ContextProducts);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(product, quantity) {
    // Add product to cart with quantity
    setCart([...cart, {...product, quantity}]);
    setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
    console.log(total);
    //add to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
  }

  function removeFromCart(product) {
    console.log("deleted")
    setCart(cart.filter((item) => item.id !== product.id));
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
  }
  const value = {
    cart,
    total,
    addToCart,
    removeFromCart,
    addToCartData,
  };
  return <ContextProducts.Provider value={value}>{children}</ContextProducts.Provider>;
}