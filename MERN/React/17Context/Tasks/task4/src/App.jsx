import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Table from "./components/Table";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    handleDetails();
  }, []);
  const { product, setProduct } = useContext(AppContext);
  const handleDetails = () => {
    setProduct([
      {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        stock: 12,
      },
      {
        id: 2,
        name: "Mobile Phone",
        price: 18000,
        category: "Electronics",
        stock: 30,
      },
      {
        id: 3,
        name: "Headphones",
        price: 2500,
        category: "Apple",
        stock: 50,
      },
    ]);
  };
  return (
    <>
      <h1>App</h1>
      <Table />
    </>
  );
};

export default App;
