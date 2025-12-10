import "./App.css";
import { IoMdHome } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoHappyOutline } from "react-icons/io5";
function App() {
  return (
    <>
      <h1 className="text-center text-danger">React-Icons</h1>
      <div className="fs-1">
        <IoMdHome />
        <IoLogoYoutube />
        <IoHappyOutline />
      </div>
    </>
  );
}

export default App;
