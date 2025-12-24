import React, { useState } from "react";

const Task4 = () => {
  let [value, setValue] = useState(-10);
  const positiveValue = () => {
    setValue((prev) => Math.abs(prev));
  };
  return (
    <>
      <h1>{value}</h1>
      <button onClick={positiveValue}>Positive</button>
    </>
  );
};

export default Task4;
