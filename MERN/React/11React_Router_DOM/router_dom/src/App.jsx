import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<>Home Page</>} />
          <Route path="/about" element={<>About Us</>} />
          <Route path="/contact" element={<>Contact</>} />
          <Route path="/contact/contact-us" element={<>Contact US</>} />
          <Route path="*" element={<>404 Page is Not Found</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
