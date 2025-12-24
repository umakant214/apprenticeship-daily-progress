import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  // const Calculation = (num) => {
  //   console.log("calculation running...");

  //   let sum = 0;
  //   for (let i = 1; i <= 10; i++) {
  //     sum += i;
  //   }
  //   return num * num;
  // };
  // const result = Calculation(number);

  ///useMemo--performence
  const result = useMemo(() => {
    console.log("calculation running...");
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    return number * number;
  }, [number]);

  ///useMemo
  return (
    <>
      <input onChange={(e) => setNumber(e.target.value)} type="text" />
      {result}
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count}
    </>
  );
}

export default App;
