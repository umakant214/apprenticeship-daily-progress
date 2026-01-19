import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudent } from "./redux/slice/studentSlice";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setStudent([
        {
          name: "Umakant Yadav",
          email: "umakant@gmail.com",
          age: "20",
        },
      ])
    );
  }, []);

  const data = useSelector((state) => state.student);
  console.log(data);

  return (
    <>
      <h1>App </h1>
      {data.map((item, index) => {
        return (
          <>
            <ul>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.age}</li>
            </ul>
          </>
        );
      })}
    </>
  );
};

export default App;
