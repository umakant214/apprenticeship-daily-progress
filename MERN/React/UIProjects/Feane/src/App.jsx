import "./App.css";
// import Header from "./Header";
// import Slider from "./slider";
import Hero from "./hero";
import Menu from "./Menu";
import About from "./Aboutimg";
import Table from "./table";
import Customers from "./Customers";
import Footer from "./Footer";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Header></Header> */}
      {/* <Slider></Slider> */}
      <Hero></Hero>
      <Menu></Menu>
      <About></About>
      <Table></Table>
      <Customers></Customers>
      <Footer></Footer>
    </>
  );
}

export default App;
