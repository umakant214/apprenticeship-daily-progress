import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { VscOutput } from "react-icons/vsc";
import { TbLockPassword } from "react-icons/tb";

const Task3 = () => {
  const [StudentName, setStudentName] = useState("");
  const [RollNumber, setRollNumber] = useState("");
  const [CourseTitle, setCourseTitle] = useState("");
  const [AdmissionYear, setAdmissionYear] = useState("");
  const submit = () => {
    console.log(StudentName, RollNumber, CourseTitle, AdmissionYear);
  };
  return (
    <div className="row">
      <div
        className="col-sm-4 mx-auto mt-5   shadow-sm bg-light border-secondary py-5 rounded-2"
        style={{ border: ".5px solid lightgray" }}
      >
        <h2 className="text-center mb-4">
          <span>
            Registration <span className="text-info">Form</span>
          </span>
        </h2>
        <div className="input-group flex-nowrap mb-3">
          <span className="input-group-text" id="addon-wrapping">
            <CiUser />
          </span>
          <input
            onChange={(e) => setStudentName(() => e.target.value)}
            type="text"
            className="form-control"
            placeholder="StudentName"
            aria-label="First Name"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="input-group flex-nowrap mb-3">
          <span className="input-group-text" id="addon-wrapping">
            <IoEyeOutline />
          </span>
          <input
            onChange={(e) => setRollNumber(() => e.target.value)}
            type="text"
            className="form-control"
            placeholder="RollNumber"
            aria-label="Display Name"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="input-group flex-nowrap mb-3">
          <span className="input-group-text" id="addon-wrapping">
            <VscOutput />
          </span>
          <input
            onChange={(e) => setCourseTitle(() => e.target.value)}
            type="text"
            className="form-control"
            placeholder="CourseTitle"
            aria-label="Email Address"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">
                <TbLockPassword />
              </span>
              <input
                onChange={(e) => setAdmissionYear(() => e.target.value)}
                type="password"
                className="form-control"
                placeholder="AdmissionYear"
                aria-label="Email Address"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="invalidCheck"
                required=""
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                I Agree
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            perspiciatis?
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button onClick={submit} className="btn btn-primary w-100">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task3;
