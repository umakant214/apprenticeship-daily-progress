import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Phone from "./components/Phone";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar />
        <Home />
        <Category />
        <Product />
        <Blog />
        <Phone />
        <Footer />
      </div>
    </>
  );
}

export default App;
