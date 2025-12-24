import React from "react";
import CounterView from "./CounterView";

const Counter = ({ cou }) => {
  console.log(cou);
  return (
    <>
      <CounterView cou={cou} />
    </>
  );
};

export default Counter;
