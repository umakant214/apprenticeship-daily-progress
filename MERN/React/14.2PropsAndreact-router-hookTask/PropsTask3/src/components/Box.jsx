import React from "react";
import Text from "./Text";

const Box = ({ box }) => {
  console.log(box);
  return (
    <>
      <Text text={box} />
    </>
  );
};

export default Box;
