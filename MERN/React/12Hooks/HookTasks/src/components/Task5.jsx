import React, { useState } from "react";

const Task5 = () => {
  let [num1, setNum1] = useState(10);
  let [num2, setNum2] = useState(20);

  const update = () => {
    setNum1((prev) => (prev = 0));
    setNum2((prev) => (prev = 0));
  };
  return (
    <>
      <h1>{num1}</h1>
      <h1>{num2}</h1>
      <button onClick={update}>Update</button>
    </>
  );
};

export default Task5;
