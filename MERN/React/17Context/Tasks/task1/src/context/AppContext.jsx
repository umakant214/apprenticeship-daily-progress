import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Umakant Yadav",
    email: "umakant@gmail.com",
  });
  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
