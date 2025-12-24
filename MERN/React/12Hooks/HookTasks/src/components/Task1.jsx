import { useState } from "react";

function App() {
  let [oddCount, setOddCount] = useState(1);

  const incrementToNextOdd = () => {
    setOddCount((prevCount) => prevCount + 2);
  };

  return (
    <>
      <h1>{oddCount}</h1>
      <button onClick={incrementToNextOdd}> Odd Number</button>
    </>
  );
}

export default App;
