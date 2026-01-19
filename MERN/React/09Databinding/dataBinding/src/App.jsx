import React from "react";

const App = () => {
  let obj = {
    name: "Umakant Yadav",
    email: "umakangt@gmail.com",
    password: "1233434",
  };
  return (
    <>
      {obj.name} <br />
      {obj.email} <br />
      {obj.password} <br />
    </>
  );
};

export default App;
