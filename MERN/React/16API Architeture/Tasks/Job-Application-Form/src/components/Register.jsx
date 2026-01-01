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
    experience: yup.string().required(),
    skill: yup.string().required(),
    salary: yup.string().required(),
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

    const res = await fetch(`http://localhost:3000/job_application_form`, {
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
              <span className="text-danger">Job Application</span>
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
              {...register("mobile")}
              type="text"
              placeholder="Mobile Number"
              className="form-control mb-3"
            />
            {errors.mobile?.message && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}
            <>
              <input
                {...register("experience")}
                type="text"
                placeholder="Total Experience"
                className="form-control mb-3"
              />
              {errors.experience?.message && (
                <p className="text-danger">{errors.experience?.message}</p>
              )}

              <input
                {...register("skill")}
                type="text"
                placeholder="Skill"
                className="form-control mb-3"
              />
              {errors.skill?.message && (
                <p className="text-danger">{errors.skill?.message}</p>
              )}
              <input
                {...register("salary")}
                type="text"
                placeholder="Expected Salary"
                className="form-control mb-3"
              />
              {errors.salary?.message && (
                <p className="text-danger">{errors.salary?.message}</p>
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
