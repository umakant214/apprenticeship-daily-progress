import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const editData = JSON.parse(localStorage.getItem("editData"));
    setValue("name", editData.name);
    setValue("email", editData.email);
    setValue("mobile", editData.mobile);
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required().min(2).max(18),
    email: yup.string().required().email().max(25),
    mobile: yup.string().required().min(10).max(10),
  });
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (formData) => {
    const data = JSON.parse(localStorage.getItem("dataArr"));
    data[id] = formData;
    localStorage.setItem("dataArr", JSON.stringify(data));
    nav("/view");
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col-sm-4 border mt-5 mx-auto p-4 bg-light rounded-4 shadow-sm">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
            <h1 className="text-center mb-4">
              <span>Update</span>
              <span className="text-warning">Form</span>
            </h1>

            <input
              {...register("name")}
              type="text"
              placeholder="Enter Your Name"
              className="form-control mb-3"
            />
            {errors.name && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Your Email"
              className="form-control mb-3"
            />
            {errors.email && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
            <input
              {...register("mobile")}
              type="text"
              placeholder="Enter Your Mobile Number"
              className="form-control mb-3"
            />
            {errors.mobile && (
              <p className="text-danger">{errors.mobile?.message}</p>
            )}

            <input
              type="submit"
              value="Update"
              className="form-control mb-3 btn btn-warning text-light"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
