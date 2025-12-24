import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const Edit = () => {
  const { id } = useParams();
  useEffect(() => {
    const editData = JSON.parse(localStorage.getItem("editData"));
    setValue("name", editData.name);
    setValue("email", editData.email);
    setValue("password", editData.password);
  }, []);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required().min(3).max(18),
    email: yup.string().required().email().max(25),
    password: yup.string().required().min(8).max(50),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (formData) => {
    const data = JSON.parse(localStorage.getItem("dataArr"));
    data[id] = formData;
    localStorage.setItem("dataArr", JSON.stringify(data));
    navigate("/view");
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto bg-light rounded-4 border p-4">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
            <h2 className="text-center mb-4">Registration Form</h2>
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
              {...register("password")}
              type="password"
              placeholder="Password"
              className="form-control mb-3"
            />
            {errors.password && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
            <input type="submit" className="form-control btn btn-success" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
