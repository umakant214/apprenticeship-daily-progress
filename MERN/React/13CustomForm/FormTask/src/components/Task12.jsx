import React, { useState } from "react";

const Task12 = () => {
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
        <div className="col-sm-4 mx-auto  rounded-2 p-4 py-5 shadow-lg border border-danger border-3 border-bottom-0">
          <h2 className="text-center py-2">
            Order
            <span className="text-danger">
              Details
              <i className="fa-solid fa-user fa-bounce text-success" />
            </span>
          </h2>
          <div className="input-group flex-nowrap my-3">
            <input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              className="form-control"
              placeholder="ProductName"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap my-3">
            <input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              className="form-control"
              placeholder="ProductId"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap my-3">
            <input
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              type="text"
              className="form-control"
              placeholder="OrderId"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="input-group flex-nowrap my-3">
            <input
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              type="text"
              className="form-control"
              placeholder="OrderName"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <button onClick={submit} className="btn btn-danger form-control fs-5">
            Order Now
          </button>{" "}
          <br />
        </div>
      </div>
    </>
  );
};

export default Task12;
