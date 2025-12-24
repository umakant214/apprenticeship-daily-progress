import { useState } from "react";

const Task2 = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    pin: "",
    email: "",
    check: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleValidate = () => {
    let tempErrors = {};
    let isValid = true;

    // Password
    if (formData.password.trim() === "") {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Minimum 8 characters required";
      isValid = false;
    }

    // Confirm Password
    if (formData.confirmPassword.trim() === "") {
      tempErrors.confirmPassword = "Confirm password required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // PIN
    if (formData.pin.trim() === "") {
      tempErrors.pin = "PIN is required";
      isValid = false;
    } else if (formData.pin.length !== 4) {
      tempErrors.pin = "PIN must be 4 digits";
      isValid = false;
    }

    // Email
    if (formData.email.trim() === "") {
      tempErrors.email = "Email is required";
      isValid = false;
    }

    // Checkbox
    if (!formData.check) {
      tempErrors.check = "Please accept terms";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const submit = () => {
    if (handleValidate()) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <div className="row mt-4">
      <div className="col-sm-4 mx-auto p-5 bg-light rounded-3 shadow-sm">
        <h2 className="text-center mb-4">
          Login <span className="text-danger">Form</span>
        </h2>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={handleChange}
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-control mb-2"
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword}</p>
        )}

        <input
          type="number"
          name="pin"
          placeholder="4 digit PIN"
          className="form-control mb-2"
          onChange={handleChange}
        />
        {errors.pin && <p className="text-danger">{errors.pin}</p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="form-control mb-2"
          onChange={handleChange}
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}

        <div className="mb-3">
          <input
            type="checkbox"
            name="check"
            onChange={handleChange}
            className="me-2"
          />
          Accept Terms
          {errors.check && <p className="text-danger">{errors.check}</p>}
        </div>

        <button onClick={submit} className="btn btn-danger form-control">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Task2;
