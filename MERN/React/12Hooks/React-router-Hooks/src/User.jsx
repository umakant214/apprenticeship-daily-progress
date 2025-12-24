import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <>
      <h2>User</h2>
      <div>{id}</div>
    </>
  );
};

export default User;
