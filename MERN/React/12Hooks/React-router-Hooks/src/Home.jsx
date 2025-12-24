import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/about");
  };
  return (
    <>
      <div onClick={handleSubmit}>Home</div>
    </>
  );
};

export default Home;
