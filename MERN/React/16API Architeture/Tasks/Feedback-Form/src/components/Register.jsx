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
    rating: yup.string().required(),
    message: yup.string().required(),
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

    const res = await fetch(`http://localhost:3000/feedback_form`, {
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
              <span className="text-danger">Feedback </span>
              Form
            </h1>
            <input
              {...register("name")}
              type="text"
              placeholder="Application Name"
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
              {...register("rating")}
              type="text"
              placeholder="Rating (1-5)"
              className="form-control mb-3"
            />
            {errors.rating?.message && (
              <p className="text-danger">{errors.rating?.message}</p>
            )}
            <>
              <input
                {...register("message")}
                type="text"
                placeholder=" Message"
                className="form-control mb-3"
              />
              {errors.message?.message && (
                <p className="text-danger">{errors.message?.message}</p>
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
