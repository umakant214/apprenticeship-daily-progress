import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./components/View";
import Register from "./components/Register";
import Update from "./components/Update";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<View />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit" element={<Update />} />
            <Route path="*" element={<>404 PAge Not Found</>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
