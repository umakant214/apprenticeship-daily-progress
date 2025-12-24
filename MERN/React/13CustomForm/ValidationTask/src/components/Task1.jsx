import { useState } from "react";

const Task1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    age: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    // Name
    if (formData.name.trim() === "") {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 3) {
      tempErrors.name = "Minimum 3 characters required";
      isValid = false;
    }

    // Email
    if (formData.email.trim() === "") {
      tempErrors.email = "Email is required";
      isValid = false;
    }

    // Username
    if (formData.username.trim() === "") {
      tempErrors.username = "Username is required";
      isValid = false;
    }

    // Age
    if (formData.age === "") {
      tempErrors.age = "Age is required";
      isValid = false;
    } else if (formData.age < 18) {
      tempErrors.age = "Age must be 18+";
      isValid = false;
    }

    // Mobile
    if (formData.mobile.trim() === "") {
      tempErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (formData.mobile.length !== 10) {
      tempErrors.mobile = "Mobile must be 10 digits";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const submit = () => {
    if (handleValidation()) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="row mt-4">
      <div className="col-sm-4 mx-auto p-5 bg-light rounded-3 shadow-sm">
        <h3 className="text-center mb-4">
          Registration <span className="text-success">Form</span>
        </h3>

        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Full Name"
          className="form-control mb-2"
        />
        {errors.name && <p className="text-danger">{errors.name}</p>}

        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="form-control mb-2"
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}

        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          className="form-control mb-2"
        />
        {errors.username && <p className="text-danger">{errors.username}</p>}

        <input
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="Age"
          className="form-control mb-2"
        />
        {errors.age && <p className="text-danger">{errors.age}</p>}

        <input
          type="number"
          name="mobile"
          onChange={handleChange}
          placeholder="Mobile Number"
          className="form-control mb-2"
        />
        {errors.mobile && <p className="text-danger">{errors.mobile}</p>}

        <button onClick={submit} className="btn btn-success form-control">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Task1;
