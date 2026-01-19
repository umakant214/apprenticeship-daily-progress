import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProduct from "./components/StoreProduct";
import ShowProduct from "./components/ShowProduct";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <StoreProduct />
        <ShowProduct />
      </div>
    </>
  );
};

export default App;
