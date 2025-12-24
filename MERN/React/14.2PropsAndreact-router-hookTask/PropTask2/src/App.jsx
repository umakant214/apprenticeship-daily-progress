import { useState } from "react";
import Product from "./components/Product";

function App() {
  const [productName, setProductName] = useState("Table");
  const [category, setCategory] = useState("A");
  const [price, setPrice] = useState(2000);
  const [brand, setBrand] = useState("Wood");
  const [rating, setRating] = useState("*****");
  const [inStock, setInStock] = useState(20);
  return (
    <>
      <h1>hi jUS </h1>
      <Product
        product={{ productName, category, price, brand, rating, inStock }}
      />
    </>
  );
}

export default App;
