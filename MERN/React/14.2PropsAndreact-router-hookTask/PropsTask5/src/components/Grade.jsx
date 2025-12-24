import React from "react";
import Result from "./Result";
const Grade = ({ data }) => {
  console.log(data);

  return (
    <>
      <Result data={data} />
    </>
  );
};

export default Grade;
