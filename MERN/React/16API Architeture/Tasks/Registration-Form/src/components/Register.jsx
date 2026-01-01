import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    mobile: yup.string().required().min(10).max(10),
    gender: yup.string().required(),
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Password do not match"),
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

    const res = await fetch(`http://localhost:3000/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = res.json();
    if (result) {
      reset();
      navigate("/");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-lg-4 mx-auto p-4 rounded-4 bg-light">
          <form onSubmit={handleSubmit((data) => handleRegister(data))}>
            <h1 className="text-center mb-3">
              <span className="text-danger">Registration</span> Form
            </h1>
            <input
              {...register("name")}
              type="text"
              placeholder="Full Name"
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
              placeholder="Mobile Number"
              className="form-control mb-3"
            />
            {errors.mobile?.message && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}
            <>
              <div className="form-check form-check-inline">
                <input
                  {...register("gender")}
                  className="form-check-input"
                  type="radio"
                  id="inlineRadio1"
                  value="Male"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline mb-3">
                <input
                  {...register("gender")}
                  className="form-check-input"
                  type="radio"
                  id="inlineRadio2"
                  value="Female"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Female
                </label>
              </div>

              {errors.gender?.message && (
                <p className="text-danger">{errors.gender.message}</p>
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
                {...register("confirm_password")}
                type="text"
                placeholder="Confirm Password"
                className="form-control mb-3"
              />
              {errors.confirm_password?.message && (
                <p className="text-danger">
                  {errors.confirm_password?.message}
                </p>
              )}
              <input
                type="submit"
                className="btn btn-success mb-3 form-control"
              />
            </>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
