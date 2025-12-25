import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading.......</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<>404 Page Not Found</>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
