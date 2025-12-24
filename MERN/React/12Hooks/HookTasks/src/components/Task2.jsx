import React, { useState } from "react";

const Task2 = () => {
  let [evenNum, setEvenNum] = useState(0);
  const EvenNum = () => {
    setEvenNum((prev) => prev + 2);
  };
  return (
    <>
      <h1>{evenNum}</h1>
      <button onClick={EvenNum}>Even Number</button>;
    </>
  );
};

export default Task2;
