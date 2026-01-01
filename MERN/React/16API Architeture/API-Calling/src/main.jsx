import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import User from "./User.jsx";
import Product from "./Product.jsx";
import NewProduct from "./NewProduct.jsx";
import Comments from "./Comments.jsx";
import TypeCode from "./TypeCode.jsx";
import Post from "./Post.jsx";
import Cards from "./Cards.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <User />
    <Product />
    {/* <NewProduct /> */}
    <Comments />
    {/* <TypeCode /> */}
    <Post />
    {/* <Cards /> */}
    {/* <App /> */}
  </StrictMode>
);
