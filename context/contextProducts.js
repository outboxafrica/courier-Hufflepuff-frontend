import React, { createContext, useContext, useState } from "react";

const ContextProducts = createContext();

export function CartProducts() {
  return useContext(ContextProducts);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  

  function addToCart(product, quantity) {
    // if product is already in cart, update quantity
    const productInCart = cart.find(
      (cartProduct) => cartProduct.product.id === product.id
    );
    if (productInCart) {
      productInCart.quantity += quantity;
      setTotal(total + product.price * quantity);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setCart([...cart, { product, quantity }]);
      cart.push({...product, quantity });
      setTotal(total + product.price * quantity);
      // update local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  function removeFromCart(product) {
    console.log("deleted");
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
  };
  return (
    <ContextProducts.Provider value={value}>
      {children}
    </ContextProducts.Provider>
  );
}
