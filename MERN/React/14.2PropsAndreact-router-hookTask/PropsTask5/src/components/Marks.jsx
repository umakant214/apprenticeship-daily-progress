import React from "react";
import Grade from "./Grade";

const Marks = ({ data }) => {
  console.log(data);

  return (
    <div>
      <p></p>
      <Grade data={data} />
    </div>
  );
};

export default Marks;
