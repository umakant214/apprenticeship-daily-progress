import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Task4 = () => {
  const [EmployeeName, setEmployeeName] = useState("");
  const [EmployeeCode, setEmployeeCode] = useState("");
  const [DepartmentTitle, setDepartmentTitle] = useState("");
  const [JoiningDate, setJoiningDate] = useState("");

  const submit = () => {
    console.log(EmployeeName, EmployeeCode, DepartmentTitle, JoiningDate);
  };
  return (
    <>
      <div className="row a p-5">
        <div className="col-sm-4 mx-auto p-4 bg-light rounded-2">
          <button
            type="button"
            className="btn-close"
            style={{ marginLeft: "90%" }}
            aria-label="Close"
          />
          <h3 className="text-center">Login</h3>
          <input
            onChange={(e) => setEmployeeName(() => e.target.value)}
            className="form-control mt-4"
            type="text"
            placeholder="EmployeeName"
          />
          <input
            onChange={(e) => setEmployeeCode(() => e.target.value)}
            className="form-control mt-4"
            type="number"
            placeholder="EmployeeCode"
          />
          <input
            onChange={(e) => setDepartmentTitle(() => e.target.value)}
            className="form-control mt-4"
            type="text"
            placeholder="DepartmentTitle"
          />
          <input
            onChange={(e) => setJoiningDate(() => e.target.value)}
            className="form-control mt-4"
            type="date"
            placeholder="JoiningDate"
          />
          <button
            onClick={submit}
            className="btn btn-info w-100 mt-4 text-light"
          >
            Login
          </button>
          <p className="text-center mt-2">or use a social network</p>
          <CiTwitter className="fs-2" style={{ marginLeft: "100px" }} />
          <FaFacebook className="fs-2 ms-4" />
          <FaInstagramSquare className="fs-2 ms-4" />
          <hr />
          <p className="text-center">
            Not a member yet?{" "}
            <a className="text-decoration-none" href="#">
              Sign Up.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Task4;
