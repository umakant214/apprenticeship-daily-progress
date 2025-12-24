import React, { useMemo } from "react";

const Task2 = () => {
  const arr = [2, 3, 4, 5, 6, 7, 8, 9];

  //   const filterData = () => {
  //     let result = arr.filter((num) => num % 2 == 0);
  //     return result;
  //   };
  //   let res = filterData();

  const result = useMemo(() => {
    let result = arr.filter((num) => num % 2 == 0);
    return result;
  }, []);
  return (
    <>
      <h1>{result}</h1>
    </>
  );
};

export default Task2;
