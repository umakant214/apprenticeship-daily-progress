import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().required().email(),
    otp: yup.string().required().min(4).max(6),
    new_password: yup.string().required(),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("new_password")], "Passwords do not match"),
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
    // console.log(formData);

    const res = await fetch(`http://localhost:3000/reset_password`, {
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
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-lg-4 mx-auto p-4 rounded-4 bg-light">
          <form onSubmit={handleSubmit((data) => handleRegister(data))}>
            <h1 className="text-center mb-3">
              <span className="text-danger">Password Reset </span>
              Form
            </h1>
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
              {...register("otp")}
              type="text"
              placeholder="otp "
              className="form-control mb-3"
            />
            {errors.otp?.message && (
              <p className="text-danger">{errors.otp?.message}</p>
            )}
            <>
              <input
                {...register("new_password")}
                type="text"
                placeholder=" new_password"
                className="form-control mb-3"
              />
              {errors.new_password?.message && (
                <p className="text-danger">{errors.new_password?.message}</p>
              )}

              <input
                {...register("confirm_password")}
                type="text"
                placeholder="confirm_password"
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
