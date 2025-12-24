import { useState } from "react";

const Task1 = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const submit = () => {
    console.log(fname, lname, email, number);
  };
  return (
    <div className="row mt-4">
      <div className="col-sm-4 mx-auto p-5 bg-light rounded-3 border-1 shadow-sm">
        <h2 className="text-center mb-4">
          <span>Registration</span> <span className="text-success">Form</span>
        </h2>
        <input
          onChange={(e) => setFname(() => e.target.value)}
          type="text"
          placeholder="Enter Your First Name"
          className="form-control mb-3"
        />
        <input
          type="text"
          onChange={(e) => setLname(() => e.target.value)}
          placeholder="Enter Your Last Name"
          className="form-control mb-3"
        />
        <input
          onChange={(e) => setEmail(() => e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          className="form-control mb-3"
        />
        <input
          onChange={(e) => setNumber(() => e.target.value)}
          type="number"
          placeholder="Enter Your Number"
          className="form-control mb-3"
        />
        <button onClick={submit} className="btn btn-success form-control">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Task1;
