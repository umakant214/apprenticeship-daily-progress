import React from "react";

const ProdcutFinal = ({ product }) => {
  return (
    <>
      <h1>Productfinal</h1>
      <ul>
        <li>{product.productName}</li>
        <li>{product.category}</li>
        <li>{product.price}</li>
        <li>{product.brand}</li>
        <li>{product.rating}</li>
        <li>{product.inStock}</li>
      </ul>
    </>
  );
};

export default ProdcutFinal;
