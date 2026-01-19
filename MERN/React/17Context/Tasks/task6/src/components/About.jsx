import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const About = () => {
  const { data, setData } = useContext(AppContext);
  const btnClick = () => {
    setData({
      name: "Umakant",
      email: "umakant@g,ail.com",
    });
  };
  return (
    <>
      <button onClick={btnClick}>Click</button>
      <ul>
        <li>{data[0]}</li>
        <li>{data[1]}</li>
        <li>{data[2]}</li>
        <li>{data[3]}</li>
        <li>{data[4]}</li>
        <li>{data[5]}</li>
        <li>{data[6]}</li>
      </ul>
      <h1>About </h1>
    </>
  );
};

export default About;
