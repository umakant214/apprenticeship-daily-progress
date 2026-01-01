import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [product, setProduct] = useState([
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Apple",
      stock: 50,
    },
  ]);
  return (
    <>
      <AppContext.Provider value={{ product, setProduct }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
