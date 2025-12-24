import React from "react";
import Counter from "./components/Counter";
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState("12c");
  const [minValue, setMinValue] = useState("15 hai");
  const [maxValue, setMaxValue] = useState("15 hai");
  const [step, setStep] = useState(111);
  const [label, setLabel] = useState(111);
  const [unit, setUnit] = useState(111);
  return (
    <>
      <h1>i</h1>
      <Counter cou={{ count, minValue, maxValue, step, label, unit }} />
    </>
  );
};

export default App;
