import React, { useState } from "react";

const Task11 = () => {
  const [formData, SetFormData] = useState({
    countryName: "",
    time: "",
    socialMedia: "",
    HexCode: "",
  });
  const Register = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="row mt-5">
        <div
          className="col-sm-6 mx-auto bg-light p-4 rounded-3 shadow-lg"
          style={{ border: "1px solid lightgray !important" }}
        >
          <h3 className="">New Student</h3>
          <hr />
          <div className="row">
            {/* Country Name */}
            <div className="col-6 mb-2">
              <label htmlFor="countryName" className="form-label fw-medium">
                Country Name <span className="text-danger fw-bold fs-5">*</span>
              </label>
              <input
                onChange={(e) =>
                  SetFormData((prev) => ({
                    ...prev,
                    countryName: e.target.value,
                  }))
                }
                type="text"
                id="countryName"
                className="form-control bg-light mb-2"
                placeholder="Country Name"
              />
            </div>
            {/* Time */}
            <div className="col-6 mb-2">
              <label htmlFor="time" className="form-label fw-medium">
                Time <span className="text-danger fw-bold fs-5">*</span>
              </label>
              <input
                onChange={(e) =>
                  SetFormData((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                type="time"
                id="time"
                className="form-control bg-light mb-2"
                placeholder="Time"
              />
            </div>
            {/* Social Media */}
            <div className="col-6 mb-2">
              <label htmlFor="socialMedia" className="form-label fw-medium">
                Social Media Username
                <span className="text-danger fw-bold fs-5">*</span>
              </label>
              <input
                onChange={(e) =>
                  SetFormData((prev) => ({
                    ...prev,
                    socialMedia: e.target.value,
                  }))
                }
                type="text"
                id="socialMedia"
                className="form-control bg-light mb-2"
                placeholder="Username"
              />
            </div>
            {/* Hex Code */}
            <div className="col-6 mb-4">
              <label htmlFor="colorCode" className="form-label fw-medium">
                Hex Color Code{" "}
                <span className="text-danger fw-bold fs-5">*</span>
              </label>
              <input
                onChange={(e) =>
                  SetFormData((prev) => ({
                    ...prev,
                    HexCode: e.target.value,
                  }))
                }
                type="text"
                id="colorCode"
                className="form-control bg-light mb-2"
                placeholder="#AABBCC"
              />
            </div>
            <div className="col-6">
              <button className="btn btn-secondary rounded-5">
                Total Amount : 0
              </button>
            </div>
            <div className="col-6">
              <button
                onClick={Register}
                className="btn rounded-5 text-light"
                style={{ marginLeft: "48%", backgroundColor: "orangered" }}
              >
                Register &amp; Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task11;
