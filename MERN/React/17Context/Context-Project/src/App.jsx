import React, { useContext } from "react";
import AppContext from "./context/AppContext";

const App = () => {
  const { data, setData } = useContext(AppContext);
  return (
    <>
      <h1>Context</h1>
      {data.name}
    </>
  );
};

export default App;
