import React from "react";
import CounterBox from "./CounterBox";

const CounterView = ({ cou }) => {
  console.log(cou);
  return (
    <>
      <CounterBox cou={cou} />
    </>
  );
};

export default CounterView;
