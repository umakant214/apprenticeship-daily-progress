import React from "react";

const Child = React.memo(({ handleIncrement }) => {
  console.log("child is running........");

  return (
    <>
      <button onClick={handleIncrement}>Child</button>
    </>
  );
});

export default Child;
