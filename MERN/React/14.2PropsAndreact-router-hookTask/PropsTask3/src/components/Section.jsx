import React from "react";
import Box from "./Box";

const Section = ({ section }) => {
  console.log(section);
  return (
    <>
      <Box box={section} />
    </>
  );
};

export default Section;
