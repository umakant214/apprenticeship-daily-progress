import React from "react";

const Text = ({ text }) => {
  console.log(text);
  return (
    <>
      <h1>Last wala hai</h1>
      <ul>
        <li>{text.bgColor}</li>
        <li>{text.textColor}</li>
        <li>{text.fontSize}</li>
        <li>{text.fontFamily}</li>
        <li>{text.padding}</li>
        <li>{text.borderRadius}</li>
      </ul>
    </>
  );
};

export default Text;
