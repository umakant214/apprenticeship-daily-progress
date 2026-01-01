import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const List = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <ul>
        <li>{data.name}</li>
        <li>{data.age}</li>
        <li>{data.mobile}</li>
      </ul>
    </>
  );
};

export default List;
