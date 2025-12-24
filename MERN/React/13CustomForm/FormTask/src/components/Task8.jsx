import React, { useState } from "react";

const Task8 = () => {
  const [name, setName] = useState("");
  const [AcNumber, setAcNumber] = useState("");
  const [ifscCode, setifscCode] = useState("");
  const [location, setLocation] = useState("");

  const submit = () => {
    console.log(name, AcNumber, ifscCode, location);
  };
  return (
    <>
      <form className="row my-2">
        <div className="col-sm-4 bg-light border mx-auto  p-4 rounded-3">
          <h4 className="text-center fw-bold">Welcome Back!</h4>
          <p className="text-center mb-4">
            We missed you!Please enter your details
          </p>
          <div className="col-md-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              Bank Holder Name
            </label>
            <input
              onChange={(e) => setName(() => e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Bank Holder Name"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              AccountNumber
            </label>
            <input
              onChange={(e) => setAcNumber(() => e.target.value)}
              type="number"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter your Account Number"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              Ifsc code
            </label>
            <input
              onChange={(e) => setifscCode(() => e.target.value)}
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter Ifsc  code"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              Branch Location
            </label>
            <input
              onChange={(e) => setLocation(() => e.target.value)}
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter Branch Location"
            />
          </div>
          <div className="row mb-4">
            <div className="col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkDefault"
                />
                <label className="form-check-label" htmlFor="checkDefault">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-sm-6">
              <a
                href="#"
                className="text-primary float-end text-decoration-none"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button onClick={submit} className="btn btn-primary w-100 mb-4">
            Sign in{" "}
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <a href="#" className="text-decoration-none fw-bold">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default Task8;
