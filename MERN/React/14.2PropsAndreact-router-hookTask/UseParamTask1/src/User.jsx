import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h5>User</h5>
      <p>{id}</p>
    </>
  );
};

export default User;
