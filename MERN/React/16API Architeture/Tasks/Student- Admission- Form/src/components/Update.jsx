import React, { useEffect } from "react";

import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Update = () => {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("editData"));
    // console.log(data);

    setValue("name", data.name);
    setValue("dob", data.dob);
    setValue("percentage", data.percentage);
    setValue("address", data.address);
    setValue("mobile", data.mobile);
  }, []);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    dob: yup.string().required(),
    percentage: yup.string().required(),
    address: yup.string().required(),
    mobile: yup.string().required().min(10).max(10),
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
    const data = JSON.parse(localStorage.getItem("editData"));
    const res = await fetch(
      `http://localhost:3000/stu_registration/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    // console.log(res, "@@@@@@@@@@@@@@@@");
    const result = await res.json();
    // console.log(result, "res##########");

    if (result) {
      reset();
      navigate("/");
      Swal.fire({
        title: "Registration Form",
        text: "Registration successful",
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
              Student <span className="text-primary">Admission Form</span>
            </h1>
            <input
              {...register("name")}
              type="text"
              placeholder="Student Name"
              className="form-control mb-3"
            />
            {errors.name?.message && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
            <input
              {...register("dob")}
              type="text"
              placeholder="Date of Birth"
              className="form-control mb-3"
            />
            {errors.dob?.message && (
              <p className="text-danger">{errors.dob?.message}</p>
            )}
            <input
              {...register("percentage")}
              type="text"
              placeholder="Percentage"
              className="form-control mb-3"
            />
            {errors.percentage?.message && (
              <p className="text-danger">{errors.percentage?.message}</p>
            )}
            <input
              {...register("address")}
              type="text"
              placeholder="Address"
              className="form-control mb-3"
            />
            {errors.address?.message && (
              <p className="text-danger">{errors.address?.message}</p>
            )}
            <input
              {...register("mobile")}
              type="text"
              placeholder="- Parent Contact Number"
              className="form-control mb-3"
            />
            {errors.mobile?.message && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}
            <input
              type="submit"
              value="Update"
              className="form-control mb-3 btn btn-primary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
