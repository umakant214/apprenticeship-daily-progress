import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [name, setName] = useState("Umakant");
  const [email, setEmail] = useState("umakant@gmail.com");
  const [password, setPassword] = useState("123ssdw432");
  const [dob, setDob] = useState("05/08/2025");
  const [gender, setGender] = useState("Male");

  return (
    <>
      <h5>Parent Component </h5>
      <Profile user={{ name, email, password, dob, gender }} />
    </>
  );
}

export default App;
