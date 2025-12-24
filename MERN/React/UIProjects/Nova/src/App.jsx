import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Feature from "./components/Feature";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/feature"
              element={
                <>
                  <Feature />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                </>
              }
            />
            <Route
              path="/pricing"
              element={
                <>
                  <Pricing />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Contact />
                </>
              }
            />
            <Route path="*" element={<>404</>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
