import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Update = () => {
  const location = useLocation();
  // console.log(location.state);
  const { id, username, name, email, mobile, password } = location.state;

  useEffect(() => {
    setValue("username", username);
    setValue("name", name);
    setValue("email", email);
    setValue("mobile", mobile);
    setValue("password", password);
  }, []);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required()
      .min(3)
      .max(30)
      .matches(/[A-za-z0-9]/, "Username alphanumeric"),
    name: yup.string().required().min(3).max(16),
    email: yup.string().required().email(),
    mobile: yup.string().required().min(10).max(10),
    password: yup.string().required().min(8),
  });
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const UpdateRegister = async (formData) => {
    const response = await axios.put(
      `http://localhost:3000/registration/${id}`,
      formData
    );
    // console.log(response.data);
    const result = response.data;
    if (result) {
      navigate("/");
      Swal.fire({
        title: "Registration Successful",
        text: "Registration Successful",
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto p-4 bg-light rounded-4 border shadow-sm">
          <form onSubmit={handleSubmit((data) => UpdateRegister(data))}>
            <h1 className="text-center mb-4">
              <span className="text-danger">Update</span>
              <span> Form</span>
            </h1>
            <input
              {...register("username")}
              type="text"
              placeholder="UserName"
              className="form-control mb-3"
            />
            {errors.username && (
              <p className="text-danger">{errors.username?.message}</p>
            )}
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="form-control mb-3"
            />
            {errors.name && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="form-control mb-3"
            />
            {errors.email && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
            <input
              {...register("mobile")}
              type="text"
              placeholder="Mobile"
              className="form-control mb-3"
            />
            {errors.mobile && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}
            <input
              {...register("password")}
              type="text"
              placeholder="Password"
              className="form-control mb-3"
            />
            {errors.password && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
            <input
              type="submit"
              value="Update"
              className="form-control btn btn-danger"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
