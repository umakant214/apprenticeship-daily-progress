import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const { id, name, email, mobile, subject, message } = location.state;
  useEffect(() => {
    setValue("name", name);
    setValue("email", email);
    setValue("mobile", mobile);
    setValue("subject", subject);
    setValue("message", message);
  }, []);
  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    mobile: yup.string().required().min(10).max(10),
    subject: yup.string().required(),
    message: yup.string().required(),
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

    const res = await fetch(`http://localhost:3000/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // console.log(res, "@@@@@@@@@@@@@@@@");
    const result = await res.json();
    // console.log(result, "res##########");

    if (result) {
      reset();
      navigate("/");
      Swal.fire({
        title: "Update Form",
        text: "Update successful",
        icon: "success",
      });
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-8 col-lg-5 shadow-lg mx-auto p-4 rounded-4 border border-primary">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
            <h1 className="text-center mb-4">
              Contact <span className="text-primary"> Us Form</span>
            </h1>
            <input
              {...register("name")}
              type="text"
              placeholder=" Name"
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
              placeholder="Phone Number"
              className="form-control mb-3"
            />
            {errors.mobile?.message && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}
            <input
              {...register("subject")}
              type="text"
              placeholder="Subject"
              className="form-control mb-3"
            />
            {errors.subject?.message && (
              <p className="text-danger">{errors.subject?.message}</p>
            )}
            <input
              {...register("message")}
              type="text"
              placeholder="Message.........."
              className="form-control mb-3"
            />
            {errors.message?.message && (
              <p className="text-danger">{errors.message?.message}</p>
            )}
            <input
              type="submit"
              className="form-control mb-3 btn btn-primary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
