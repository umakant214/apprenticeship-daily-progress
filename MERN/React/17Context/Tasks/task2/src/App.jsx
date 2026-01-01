import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";

import { useContext } from "react";
import { AppContext } from "./context.jsx/AppContext";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    handleShow();
  });
  const { data, setData } = useContext(AppContext);
  const handleShow = () => {
    setData(
      {
        name: "Abhi",
        email: "abhi@gmail.com",
        mobile: "987654321",
        gender: "Male",
      },
      {
        name: "Umakant",
        email: "umakant@gmail.com",
        mobile: "987654321",
        gender: "Male",
      }
    );
  };
  return (
    <>
      <div className="container-fluid">
        <h1>App</h1>
        <Table />
      </div>
    </>
  );
};

export default App;
