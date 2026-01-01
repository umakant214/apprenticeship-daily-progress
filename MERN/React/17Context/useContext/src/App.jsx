import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./components/Home";

function App() {
  const { user, setUser } = useContext(AppContext);

  const handleClick = () => {
    setUser({ name: "umakant", email: "u@gmail.com" });
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      <Home />
    </>
  );
}

export default App;
