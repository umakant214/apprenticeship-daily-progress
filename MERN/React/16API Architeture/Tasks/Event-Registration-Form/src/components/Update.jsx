import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
const Update = () => {
  const navigate = useNavigate();

  const location = useLocation();
  // console.log(location);
  const { id, name, email, mobile, date, attendees, meal } = location.state;
  useEffect(() => {
    setValue("name", name);
    setValue("email", email);
    setValue("mobile", mobile);
    setValue("date", date);
    setValue("attendees", attendees);
    setValue("meal", meal);
  }, []);
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    mobile: yup.string().required().min(10).max(10),
    date: yup.string().required(),
    attendees: yup.string().required(),
    meal: yup.string().required(),
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

    const res = await fetch(
      `http://localhost:3000/event_registration_form/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
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
            <h2 className="text-center mb-3">
              <span className="text-danger">Event Registration </span>
              Form
            </h2>
            <input
              {...register("name")}
              type="text"
              placeholder="Participant Name"
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
                {...register("date")}
                type="text"
                placeholder=" date"
                className="form-control mb-3"
              />
              {errors.date?.message && (
                <p className="text-danger">{errors.date?.message}</p>
              )}

              <input
                {...register("attendees")}
                type="text"
                placeholder="attendees"
                className="form-control mb-3"
              />
              {errors.attendees?.message && (
                <p className="text-danger">{errors.attendees?.message}</p>
              )}
              <input
                {...register("meal")}
                type="text"
                placeholder=" meal"
                className="form-control mb-3"
              />
              {errors.meal?.message && (
                <p className="text-danger">{errors.meal?.message}</p>
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

export default Update;
