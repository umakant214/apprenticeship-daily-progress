const { createContext, useState } = require("react");

const AppContext = createContext();
const [data, setData] = useState([
  {
    name: "umakant",
    email: "a@gmail.com",
  },
]);
const AppProvider = ({ children }) => {
  return (
    <>
      <AppContext.Provider value={{ data, setData }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContext;
