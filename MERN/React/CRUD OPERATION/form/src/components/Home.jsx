import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required().min(3).max(18),
    email: yup.string().required().email().max(25),
    username: yup.string().required(),
    mobile: yup.string().required().min(10).max(10),
    age: yup.number().required().min(18).max(60),
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
      text: "Registration SuccessFully!",
      icon: "success",
    });
    // reset();
    navigate("/view");
  };
  return (
    <>
      <div className="row mt-1">
        <div className="col-sm-6 col-lg-4 mx-auto bg-light p-4 rounded-3 shadow-lg">
          <form onSubmit={handleSubmit((data) => handleRegister(data))}>
            <h2 className="text-center mb-4">
              Registration <span className="text-success">Form#</span>
            </h2>
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="form-control mb-3"
            />
            {errors?.name && (
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
              {...register("username")}
              type="text"
              placeholder="Username"
              className="form-control mb-3"
            />
            {errors.username && (
              <p className="text-danger">{errors.username?.message}</p>
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
              {...register("age")}
              type="text"
              placeholder="Age"
              className="form-control mb-3"
            />
            {errors.age && <p className="text-danger">{errors.age?.message}</p>}
            <input
              type="submit"
              className="form-control btn btn-success mb-3"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
