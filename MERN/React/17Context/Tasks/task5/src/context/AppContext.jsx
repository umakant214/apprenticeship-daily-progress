import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "Umakant",
    age: "20",
  });
  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
