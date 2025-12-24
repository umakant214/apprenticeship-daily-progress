import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import View from "./components/View";
import Edit from "./components/Edit";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<View />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<>404 Page Not Found</>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
