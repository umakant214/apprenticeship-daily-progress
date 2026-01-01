import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "Umakant",
    email: "umakant@gmail.com",
    mobile: "9876554332",
    gender: "Male",
  });

  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
