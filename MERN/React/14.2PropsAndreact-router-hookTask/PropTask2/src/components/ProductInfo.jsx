import React from "react";
import ProductPrice from "./ProductPrice";

const ProductInfo = ({ product }) => {
  return (
    <>
      <ProductPrice product={product} />
    </>
    // <div>
    //   {/* <h1>ProductInfo</h1>
    //   <ul>
    //     <li>{product.productName}</li>
    //     <li>{product.category}</li>
    //     <li>{product.price}</li>
    //     <li>{product.brand}</li>
    //     <li>{product.rating}</li>
    //     <li>{product.inStock}</li>
    //   </ul> */}
    // </div>
  );
};

export default ProductInfo;
