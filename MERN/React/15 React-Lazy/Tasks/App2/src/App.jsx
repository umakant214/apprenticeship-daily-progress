import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
// import Banner from "./components/Banner";
// import CategoryList from "./components/CategoryList";
// import ProductList from "./components/ProductList";
// import ProductCard from "./components/ProductCard";
// import Cart from "./components/Cart";

const Banner = lazy(() => import("./components/Banner"));
const CategoryList = lazy(() => import("./components/CategoryList"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductCard = lazy(() => import("./components/ProductCard"));
const Cart = lazy(() => import("./components/Cart"));
import { TailSpin } from "react-loader-spinner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          }
        >
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/category" element={<CategoryList />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/productCard" element={<ProductCard />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
