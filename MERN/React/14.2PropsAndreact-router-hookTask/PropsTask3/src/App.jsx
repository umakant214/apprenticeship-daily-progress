import React from "react";
import { useState } from "react";
import Layout from "./components/Layout";

const App = () => {
  const [bgColor, setBgColor] = useState("green");
  const [textColor, setTextColor] = useState("red");
  const [fontSize, setFontSize] = useState("20px");
  const [fontFamily, setFontFamily] = useState("aril");
  const [padding, setPadding] = useState("20px");
  const [borderRadius, setBorderRadius] = useState("10px");
  return (
    <>
      <Layout
        layout={{
          bgColor,
          textColor,
          fontSize,
          fontFamily,
          padding,
          borderRadius,
        }}
      />
    </>
  );
};

export default App;
