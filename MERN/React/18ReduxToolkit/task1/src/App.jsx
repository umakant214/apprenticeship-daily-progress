import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile, clearProfile } from "./redux/slice/profile";
import { setUser, clearUser } from "./redux/slice/user";
import Home from "./components/Home";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProfile({ name: "EditedName", age: "29" }));
    dispatch(setUser([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  }, []);

  const profile = useSelector((state) => state.profile);
  return (
    <>
      <p>{profile.name}</p>
      <p>{profile.age}</p>
      App
      <Home />
    </>
  );
};

export default App;
