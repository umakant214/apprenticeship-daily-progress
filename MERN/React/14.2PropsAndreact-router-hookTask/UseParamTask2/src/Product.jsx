import React from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <p>Product Deatils</p>
      <p>{id}</p>
    </>
  );
};

export default Product;
