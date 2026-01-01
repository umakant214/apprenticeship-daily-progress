import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState([
    {
      name: "Sumit",
      email: "sumit@gmail.com",
      mobile: "9876543210",
      password: "12345",
    },
  ]);

  return (
    <>
      <AppContext.Provider value={{ formData, setFormData }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
