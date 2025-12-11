import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Content from "./components/content";
import Header from "./components/Header";
import Slider from "./components/slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Content />
    </>
  );
}

export default App;
