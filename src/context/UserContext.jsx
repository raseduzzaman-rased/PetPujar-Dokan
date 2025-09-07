import React, { createContext, useEffect, useState } from "react";
import { food_items } from "../food";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  let [cate, setCate] = useState(food_items);
  let [showCart, setShowCart] = useState(false);

  //  Cart states
  let [cartItems, setCartItems] = useState([]);

  //  Add to cart
  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //  Remove from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  //  Update quantity
  const updateQty = (id, qty) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: qty > 0 ? qty : 1 } : item
      )
    );
  };

  //  Calculate total
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  // LocalStorage থেকে cart লোড করা
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Cart change হলে LocalStorage এ save করা
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
    cartItems,
    addToCart,
    removeFromCart,
    updateQty,
    getTotal,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default UserContext;
