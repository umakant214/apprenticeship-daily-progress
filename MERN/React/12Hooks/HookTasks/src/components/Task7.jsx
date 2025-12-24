import React, { useState } from "react";

const Task7 = () => {
  let [number, setNumber] = useState(100);
  const discount = () => {
    setNumber((prev) => (prev * 10) / 100);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={discount}>10% Discount</button>
    </>
  );
};

export default Task7;
