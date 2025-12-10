import "./App.css";
import Menubar from "./Menubar";
import HeroSection from "./HeroSection";
import About from "./About";
import Category from "./Category";
import Button from "./button";
import Trousseau from "./trousseau";
import PoojaSection from "./PoojaSection";
import Remind from "./Remind";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Menubar></Menubar>
        <HeroSection></HeroSection>
        <About></About>
        <Category></Category>
        <Button></Button>
        <Trousseau></Trousseau>
        <PoojaSection></PoojaSection>
        <Remind></Remind>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
