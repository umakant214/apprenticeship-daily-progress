import ProductInfo from "./ProductInfo";

const Product = ({ product }) => {
  return (
    <>
      {/* <h1>Product</h1>
      <ul>
        <li>{product.productName}</li>
        <li>{product.category}</li>
        <li>{product.price}</li>
        <li>{product.brand}</li>
        <li>{product.rating}</li>
        <li>{product.inStock}</li>
      </ul> */}

      <ProductInfo product={product} />
    </>
  );
};

export default Product;
