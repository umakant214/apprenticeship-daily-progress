import { useState } from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [data, setData] = useState("Umakant Yadav");
  return (
    <>
      <h1>Hello</h1>
      <Home data={data} />
    </>
  );
}

export default App;
