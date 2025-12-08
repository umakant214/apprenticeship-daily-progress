import "./App.css";
import Header from "./Header";
import Navbar from "./NavBar";
import Menu from "./Menu";
import Slider from "./slider";
import Collection from "./Collection";
import Categories from "./Categories";
import Tranding from "./Tranding ";
import World from "./World";
import Trusted from "./Trusted";
import Experience from "./Experience";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header></Header>
        <Navbar></Navbar>
        <Menu></Menu>
        <Slider></Slider>
        <Collection />
        <Categories></Categories>
        <Tranding></Tranding>
        <World />
        <Trusted />
        <Experience />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
