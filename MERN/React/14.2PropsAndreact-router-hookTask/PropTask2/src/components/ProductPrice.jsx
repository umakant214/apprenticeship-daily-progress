import React from "react";
import ProdcutFinal from "./ProdcutFinal";
const ProductPrice = ({ product }) => {
  return (
    <>
      <ProdcutFinal product={product} />

      {/* <h1>ProductPrice</h1>
      <ul>
        <li>{product.productName}</li>
        <li>{product.category}</li>
        <li>{product.price}</li>
        <li>{product.brand}</li>
        <li>{product.rating}</li>
        <li>{product.inStock}</li>
      </ul> */}
    </>
  );
};

export default ProductPrice;
