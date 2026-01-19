import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { data, setData } = useContext(AppContext);
  console.log(data);

  return (
    <>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
    </>
  );
};

export default Home;
