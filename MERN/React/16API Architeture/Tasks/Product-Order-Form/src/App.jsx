import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import View from "./components/View";
import Order from "./components/Order";
import Update from "./components/Update";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<View />} />
            <Route path="/order" element={<Order />} />
            <Route path="/edit" element={<Update />} />
            <Route path="*" element={<>404 page Not Found</>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
