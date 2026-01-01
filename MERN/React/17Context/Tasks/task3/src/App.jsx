import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "./context/AppContext";
import View from "./components/View";
const App = () => {
  useEffect(() => {
    handleSubmit();
  }, []);
  const { formData, setFormData } = useContext(AppContext);
  const handleSubmit = () => {
    setFormData([
      {
        name: "Amit",
        email: "amit@gmail.com",
        mobile: "9876543210",
        password: "123456",
      },
      {
        name: "Rahul",
        email: "rahul@gmail.com",
        mobile: "9123456780",
        password: "654321",
      },
      {
        name: "Neha",
        email: "neha@gmail.com",
        mobile: "9001122334",
        password: "111222",
      },
      {
        name: "Pooja",
        email: "pooja@gmail.com",
        mobile: "9887766554",
        password: "999888",
      },
    ]);
  };
  return (
    <>
      <div className="container-fluid">
        <h1>App</h1>
        <View />
      </div>
    </>
  );
};

export default App;
