import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudent } from "./redux/slice/studentSlice";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStudent({ name: "umakant Yadav", email: "umakant@gmail.com" }));
  }, []);

  const student = useSelector((state) => state.student);
  return (
    <>
      <p>{student.name}</p>
      App
    </>
  );
};

export default App;
