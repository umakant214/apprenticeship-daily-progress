import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./components/Home";

function App() {
  const { user, setUser } = useContext(AppContext);

  const handleSubmit = () => {
    setUser({ name: "Abhi", email: "abhi@gmail.com" });
  };
  return (
    <>
      <button onClick={handleSubmit}>Click</button>
      <Home />
    </>
  );
}

export default App;
