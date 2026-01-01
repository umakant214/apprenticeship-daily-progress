import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>Home</p>
    </>
  );
};

export default Home;
