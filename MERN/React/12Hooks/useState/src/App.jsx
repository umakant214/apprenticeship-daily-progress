import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 12) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log("hii Lala");
  }, [count]);
  return (
    <>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
