import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 5, 66, 78]);
  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
