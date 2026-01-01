import React from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";
import List from "./components/List";

const App = () => {
  const { data, setData } = useContext(AppContext);
  useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = () => {
    setData({
      name: "Umakant",
      age: "20",
      mobile: "9876543210",
    });
  };
  return (
    <>
      <h1>App</h1>
      <List />
    </>
  );
};

export default App;
