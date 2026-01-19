import React from "react";
import { setUser } from "./redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const sendData = () => {
    dispatch(
      setUser({
        name: "Umakant",
        age: 22,
      })
    );
  };
  return (
    <>
      <p>App</p>
      <button onClick={sendData}>send</button>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>
    </>
  );
};

export default App;
