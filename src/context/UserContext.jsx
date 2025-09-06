import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const DataContext = createContext();

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  let [cate, setCate] = useState(food_items);
  let [showCart, setShowCart] = useState(false);

  const data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default UserContext;
