import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-right" className="box bg-info"></div>
      <div data-aos="fade-down-right" className="box bg-danger"></div>
      <div data-aos="flip-left" className="box bg-info"></div>
      <div data-aos="flip-up" className="box bg-dark"></div>
      <div data-aos="zoom-in-up" className="box bg-warning"></div>
      <div data-aos="zoom-out" className="box bg-primary"></div>
      <div data-aos="zoom-out-left" className="box bg-secondary"></div>
    </>
  );
}

export default App;
