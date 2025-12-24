import React, { useCallback, useState } from "react";
import Child from "./Child";

const Usecb = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);
  return (
    <>
      <button onClick={handleIncrement}>Click</button> {count} <br />
      <br />
      <Child handleIncrement={handleIncrement} />
    </>
  );
};

export default Usecb;
