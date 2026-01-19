import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      name: "Umakant",
      email: "umakant@gmail.com",
      mobile: "9876554342",
      password: "2323321323",
    },
  ]);

  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
