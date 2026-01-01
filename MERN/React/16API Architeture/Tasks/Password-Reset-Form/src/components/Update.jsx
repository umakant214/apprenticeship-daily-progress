import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const { id, email, otp, new_password, confirm_password } = location.state;
  useEffect(() => {
    setValue("email", email);
    setValue("otp", otp);
    setValue("new_password", new_password);
    setValue("confirm_password", confirm_password);
  }, []);
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
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = async (formData) => {
    // console.log(formData);

    const res = await fetch(`http://localhost:3000/reset_password/${id}`, {
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
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-lg-4 mx-auto p-4 rounded-4 bg-light">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
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
                value="Update"
                className="btn btn-success mb-3 form-control"
              />
            </>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
