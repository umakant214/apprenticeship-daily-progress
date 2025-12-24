import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";

function MultiState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const submit = () => {
    console.log(name, email, "ok.");
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-4 mx-auto p-4 bg-light">
            <h2 className="text-center mb-4">
              <span>React</span> <span>Form</span>
            </h2>

            <input
              onChange={(e) => setName(() => e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="form-control mb-3"
            />

            <input
              onChange={(e) => setEmail(() => e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-control mb-3"
            />

            <button
              onClick={submit}
              className="btn btn-warning form-control text-light"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiState;
