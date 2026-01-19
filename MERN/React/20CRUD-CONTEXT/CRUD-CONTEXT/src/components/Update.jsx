import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(AppContext);

  // Get index of user to edit from localStorage
  const editIndex = JSON.parse(localStorage.getItem("editData"));

  // Get the user object safely
  const editUser = data?.[editIndex]; // optional chaining to avoid errors

  // Yup validation schema
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Minimum 3 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    mobile: yup
      .string()
      .required("Mobile is required")
      .min(10, "Minimum 10 digits"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Minimum 8 characters"),
  });

  // React Hook Form setup
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Prefill the form AFTER useForm is initialized
  useEffect(() => {
    if (editUser) {
      setValue("name", editUser.name);
      setValue("email", editUser.email);
      setValue("mobile", editUser.mobile);
      setValue("password", editUser.password);
    }
  }, [editUser, setValue]); // editUser is dependency

  // Handle form submission
  const handleUpdate = (formData) => {
    const newData = [...data]; // copy array
    newData[editIndex] = formData; // update specific user
    setData(newData); // update context
    navigate("/"); // navigate back
  };

  return (
    <div className="row">
      <div className="col-sm-4 mx-auto p-4 rounded border shadow-sm">
        <form onSubmit={handleSubmit(handleUpdate)}>
          <h1 className="text-center mb-4">
            Update <span className="text-danger">Form</span>
          </h1>

          {/* Name */}
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="form-control mb-3"
          />
          <p className="text-danger">{errors.name?.message}</p>

          {/* Email */}
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="form-control mb-3"
          />
          <p className="text-danger">{errors.email?.message}</p>

          {/* Mobile */}
          <input
            {...register("mobile")}
            type="text"
            placeholder="Mobile"
            className="form-control mb-3"
          />
          <p className="text-danger">{errors.mobile?.message}</p>

          {/* Password */}
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="form-control mb-3"
          />
          <p className="text-danger">{errors.password?.message}</p>

          {/* Submit */}
          <input
            type="submit"
            value="Update"
            className="form-control btn btn-warning mb-3"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
