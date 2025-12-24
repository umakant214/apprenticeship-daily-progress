import React, { useState } from "react";

const Task9 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submit = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-4 mx-auto login rounded-2 p-4 py-5 shadow-lg border border-success border-3 border-bottom-0">
          <h2 className="text-center py-2">
            Registration
            <span className="text-success">
              Form
              <i className="fa-solid fa-user fa-bounce text-success" />
            </span>
          </h2>
          <div className="input-group flex-nowrap my-3">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa-solid fa-user fa-bounce text-success" />
            </span>
            <input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap my-3">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa-solid fa-envelope fa-bounce text-success" />
            </span>
            <input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap my-3">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa-solid fa-lock fa-flip text-success" />
            </span>
            <input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap my-3">
            <span className="input-group-text" id="addon-wrapping">
              <i className="fa-solid fa-lock fa-flip text-success" />
            </span>
            <input
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button
            onClick={submit}
            className="btn btn-success form-control fs-5"
          >
            Register Now
          </button>{" "}
          <br />
        </div>
      </div>
    </>
  );
};

export default Task9;
