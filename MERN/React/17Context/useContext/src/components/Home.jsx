import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);
  console.log(user);

  return (
    <>
      <h1>
        {user.name} <br />
        {user.email}
      </h1>
      <p>umakant</p>
    </>
  );
};

export default Home;
