import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productData } from "./redux/slice/productSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productData({ name: "Umakant ", email: "umakant@gmail.com" }));
  }, []);

  const data = useSelector((state) => state.product);
  return (
    <>
      <h1>App</h1>
      <h5>{data.name}</h5>
      <h5>{data.email}</h5>
    </>
  );
}

export default App;
