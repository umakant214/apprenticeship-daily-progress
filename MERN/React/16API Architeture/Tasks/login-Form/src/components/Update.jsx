import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { id, email, password } = location.state;
  useEffect(() => {
    setValue("email", email);
    setValue("password", password);
  }, []);
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .min(8)
      .matches(/[A-Za-z0-9]/, "Password should be  Alphanumeric")
      .matches(/[@#$%&]/, "Must be include special symbol"),
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
    const res = await fetch(`http://localhost:3000/login/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    //  console.log(res, "@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    const result = await res.json();
    //console.log(result, "######################");
    if (result) {
      reset();
      navigate("/");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto border border-primary shadow-sm bg-light rounded-4 p-4">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
            <h1 className="text-center mb-4">
              Login <span className="text-primary">Form</span>
            </h1>
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="form-control mb-3"
            />
            {errors.email?.message && (
              <p className="text-danger">{errors.email?.message}</p>
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
              value="Update"
              className="form-control btn btn-primary mb-3"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
