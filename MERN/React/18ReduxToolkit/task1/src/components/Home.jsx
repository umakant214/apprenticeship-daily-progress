import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user, "$$$$$$$$$$$$$$$");

  return (
    <>
      {user.map((item, index) => {
        return (
          <>
            <ul key={index}>
              <li key={index}> {item}</li>
            </ul>
          </>
        );
      })}
    </>
  );
};

export default Home;
