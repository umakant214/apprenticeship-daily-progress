import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required().min(2).max(18),
    email: yup.string().required().email().max(25),
    mobile: yup.string().required().min(10).max(10),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (formData) => {
    const data = JSON.parse(localStorage.getItem("dataArr"));
    if (data == null) {
      let storeData = [formData];
      localStorage.setItem("dataArr", JSON.stringify(storeData));
    } else {
      data.push(formData);
      localStorage.setItem("dataArr", JSON.stringify(data));
    }
    Swal.fire({
      title: "Registration",
      text: "Registration Successfully",
      icon: "success",
    });

    reset();

    navigate("/view");
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col-sm-4 border mt-5 mx-auto p-4 bg-light rounded-4 shadow-sm">
          <form onSubmit={handleSubmit((data) => handleRegister(data))}>
            <h1 className="text-center mb-4">
              <span>Registration</span>
              <span className="text-danger">Form🔐</span>
            </h1>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
              className="form-control mb-3"
            />
            {errors.name && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Your Email"
              className="form-control mb-3"
            />
            {errors.email && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
            <input
              {...register("mobile")}
              type="text"
              placeholder="Enter Your Mobile Number"
              className="form-control mb-3"
            />
            {errors.mobile && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}

            <input
              type="submit"
              value="Register"
              className="form-control mb-3 btn btn-danger text-light"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
