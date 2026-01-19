import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(AppContext);
  // console.log(data, "@@@@@@@@@@@@@");

  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    mobile: yup.string().required().min(10),
    password: yup.string().required().min(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = (formData) => {
    // console.log(formData);
    setData((prev) => [...prev, formData]);
    navigate("/");
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-6 col-lg-4 mx-auto p-4 rounded border shadow-sm">
          <form onSubmit={handleSubmit(handleRegister)}>
            <h1 className="text-center mb-4">
              Registration <span className="text-danger">Form</span>
            </h1>
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
              type="text"
              placeholder="Password"
              className="form-control mb-3"
            />
            {errors.password?.message && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
            <input
              type="submit"
              className="form-control btn btn-warning mb-3"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
