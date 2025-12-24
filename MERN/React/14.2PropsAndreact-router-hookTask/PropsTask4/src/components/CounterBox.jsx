import React from "react";
import CounterFinal from "./CounterFinal";

const CounterBox = ({ cou }) => {
  console.log(cou);
  return (
    <>
      <CounterFinal cou={cou} />
    </>
  );
};

export default CounterBox;
