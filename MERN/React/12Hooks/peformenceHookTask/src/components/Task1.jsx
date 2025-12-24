import React, { useMemo, useState } from "react";

const Task1 = () => {
  const [fact, setFact] = useState(0);
  //factorial function
  //   const handleCalculate = (num) => {
  //     if (num < 0) return "Invalid number";
  //     let result = 1;
  //     for (let i = 1; i <= num; i++) {
  //       result *= i;
  //     }
  //     return result;
  //   };
  //   const result = handleCalculate(Number(fact));
  //factorial function

  const result = useMemo(() => {
    const num = Number(fact);
    if (num < 0) return "Invalid number";

    let res = 1;
    for (let i = 1; i <= num; i++) {
      res *= i;
    }
    return res;
  }, [fact]);
  return (
    <>
      <input type="number" onChange={(e) => setFact(e.target.value)} />
      <h3>Factorial: {result}</h3>
    </>
  );
};

export default Task1;
