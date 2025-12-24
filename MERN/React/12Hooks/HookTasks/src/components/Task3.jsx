import { useState } from "react";

function Task3() {
  let [number, setNumber] = useState(10.75);

  const removePoint = () => {
    setNumber((prev) => Math.trunc(prev));
  };

  return (
    <div>
      <h1>{number}</h1>

      <button onClick={removePoint}>Remove Fractional Part</button>
    </div>
  );
}

export default Task3;
