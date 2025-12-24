import React, { useState } from "react";

const Task6 = () => {
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyEmail, setCompanyEmail] = useState("");
  const [CompanySize, setCompanySize] = useState("");
  const [CompanyLocation, setCompanyLocation] = useState("");

  const submit = () => {
    console.log(CompanyName, CompanyEmail, CompanySize, CompanyLocation);
  };

  return (
    <>
      <div className="row my-5 ">
        <div className="col-sm-4 py-5 mx-auto bg-light border-top border-warning border-3 p-4">
          <h4 className="text-center px-4 mb-4">Company Details</h4>
          <div className=" mb-3">
            <input
              onChange={(e) => setCompanyName(() => e.target.value)}
              type="text"
              className="form-control"
              placeholder="Company Name"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className=" mb-3">
            <input
              onChange={(e) => setCompanyEmail(() => e.target.value)}
              type="email"
              className="form-control"
              placeholder="Company Email"
              aria-label="Password"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setCompanySize(() => e.target.value)}
              type="text"
              className="form-control"
              placeholder="Company Size"
              aria-label="Company Size"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="mb-3">
            <input
              onChange={(e) => setCompanyLocation(() => e.target.value)}
              type="text"
              className="form-control"
              placeholder="Company Location"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="checkChecked"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="checkChecked">
              I want to receive the newsletter
            </label>
          </div>
          <button onClick={submit} className="btn btn-warning w-100 text-light">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Task6;
