import "./App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Heading from "./Heading";
import Skill from "./skill";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Header></Header>
        <HeroSection></HeroSection>
        <Heading></Heading>
        <Skill></Skill>
        <Project></Project>
        <Experience></Experience>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
