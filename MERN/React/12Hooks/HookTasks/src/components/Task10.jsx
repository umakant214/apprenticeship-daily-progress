import React, { useState } from "react";

const Task10 = () => {
  const initialString = "Umakant";
  const uppercaseString = initialString.toUpperCase();

  const [isUppercase, setIsUppercase] = useState(false);

  const currentString = isUppercase ? uppercaseString : initialString;

  const handleToggleCase = () => {
    setIsUppercase((prev) => !prev);
  };

  return (
    <>
      <h1>{currentString}</h1>

      <button onClick={handleToggleCase}>
        {isUppercase ? "Switch to Initial Case" : "Switch to UPPERCASE"}
      </button>
    </>
  );
};

export default Task10;
