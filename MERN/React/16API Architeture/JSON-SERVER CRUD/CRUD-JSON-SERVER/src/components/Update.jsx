import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { id, name, email, mobile, password } = location.state;

  useEffect(() => {
    setValue("name", name);
    setValue("email", email);
    setValue("mobile", mobile);
    setValue("password", password);
  }, []);
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    mobile: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleRegister = async (formData) => {
    const res = await fetch(`http://localhost:3000/registration/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result) {
      navigate("/");
      Swal.fire({
        title: "Registration",
        text: "Registration Successful",
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto p-4 bg-light shadow-sm border rounded-4">
          <form onSubmit={handleSubmit(handleRegister)}>
            <h1 className="text-center mb-3 text-danger">Registration Form</h1>
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="form-control mb-3"
            />
            {errors.name?.message && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="form-control mb-3"
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
            <input
              {...register("mobile")}
              type="text"
              placeholder="Mobile"
              className="form-control mb-3"
            />
            {errors.mobile?.message && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="form-control mb-3"
            />
            {errors.password?.message && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
            <input type="submit" className="btn btn-warning form-control" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
