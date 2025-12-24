import React, { useState } from "react";

const Task6 = () => {
  const initialNumber = 5;
  const [number, setNumber] = useState(5);
  const update = () => {
    let result = 1;
    for (let i = 1; i <= 5; i++) {
      result = result * i;
    }
    setNumber(result);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={update}>Update</button>
    </>
  );
};

export default Task6;
