import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
const Task10 = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const submit = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-10 mt-5 mx-auto shadow-lg  p-5 position-relative">
          <span className="border border-danger bg-light text-danger  d-block lock position-absolute start-50 translate-middle top-0 ">
            <CiLock />
          </span>
          <div className="row">
            <div className="col-sm-6 p-5 text-center">
              <div className="text-center fs-3 mb-2">
                Welcome to{" "}
                <b className="text-danger">
                  Admin Login{" "}
                  <CiLock className=" d-block mx-auto fs-1 text-danger" />
                </b>
              </div>
              <p className="w-75 mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                minima. Lorem ipsum dolor sit amet.
              </p>
              <p>
                <a className="btn btn-outline-danger" href="#">
                  New User! Register here
                </a>
              </p>
            </div>
            <div className="col-sm-6 p-5">
              <input
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, userId: e.target.value }))
                }
                type="email"
                placeholder="userid"
                className="form-control mb-3"
              />
              <input
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
                placeholder="loginPassword"
                className="form-control mb-3"
              />
              <input
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                type="password"
                placeholder="ConfirmPassword"
                className="form-control mb-3"
              />
              <input
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    otp: e.target.value,
                  }))
                }
                type="number"
                placeholder="OTP"
                className="form-control mb-3"
              />
              <button
                onClick={submit}
                className="btn btn-danger  w-100 form-control "
              >
                <i className="fa-solid fa-right-to-bracket" /> Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task10;
