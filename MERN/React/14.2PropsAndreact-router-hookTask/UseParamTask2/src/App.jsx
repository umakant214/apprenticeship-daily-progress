import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/product/:category/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
