import { useState } from "react";

const Task2 = () => {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Security, setSecurity] = useState("");
  const [city, setCity] = useState("");
  const submit = () => {
    console.log(username, Password, Security, city);
  };
  return (
    <div className="row mt-4">
      <div className="col-sm-4 mx-auto p-5 bg-light rounded-3 border-1 shadow-sm">
        <h2 className="text-center mb-4">
          <span>Login</span> <span className="text-danger">Form</span>
        </h2>
        <input
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          placeholder="UserName"
          className="form-control mb-3"
        />
        <input
          onChange={(e) => setPassword(() => e.target.value)}
          type="text"
          placeholder="PasswordKey"
          className="form-control mb-3"
        />
        <input
          onChange={(e) => setSecurity(() => e.target.value)}
          type="number"
          placeholder="SecurityPin"
          className="form-control mb-3"
        />
        <input
          onChange={(e) => setCity(() => e.target.value)}
          type="text"
          placeholder="Enter Use city"
          className="form-control mb-3"
        />
        <button onClick={submit} className="btn btn-danger form-control">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Task2;
