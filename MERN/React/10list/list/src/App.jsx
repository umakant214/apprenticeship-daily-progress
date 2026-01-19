import React, { useState } from "react";

const App = () => {
  let arr = [10, 20, 30, 340, 50, 56, 45, 454, 34, 23];
  const [num, setNum] = useState(arr);
  return (
    <>
      <h1>Data binding using list in react</h1>

      {num.map((item, index) => {
        return (
          <>
            <ul>
              <li>{item}</li>
            </ul>
          </>
        );
      })}
    </>
  );
};

export default App;
