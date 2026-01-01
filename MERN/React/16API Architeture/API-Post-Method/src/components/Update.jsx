import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
const Update = () => {
  const location = useLocation();
  // console.log(location);
  const { id, username, name, email } = location.state;

  console.log(id, username, name, email, "@@@@@");

  useEffect(() => {
    setValue("username", username);
    setValue("name", name);
    setValue("email", email);
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
  const handleUpdate = async (formData) => {
    // console.log(formData);

    const res = await fetch(`http://localhost:3000/user/${id}`, {
      method: "PUT",
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
      title: "Update",
      text: "Data Update Successful",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto p-4 bg-light rounded-4 border shadow-sm">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
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
