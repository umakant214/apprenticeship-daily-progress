import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Register = () => {
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
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleRegister = async (formData) => {
    console.log(formData);
    //API
    const res = await fetch(`http://localhost:3000/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result) {
      reset();
      navigate("/");
    }
    Swal.fire({
      title: "Registration",
      text: "Registration Successful",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto p-4 bg-light rounded-4 border shadow-sm">
          <form onSubmit={handleSubmit((data) => handleRegister(data))}>
            <h1 className="text-center mb-4">
              <span className="text-danger">Registration</span>
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
              type="submit"
              value="Register"
              className="form-control btn btn-danger"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
