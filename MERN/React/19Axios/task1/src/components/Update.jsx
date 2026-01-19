import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Update = () => {
  const location = useLocation();
  console.log(location);

  const { id, name, quantity, price, delivery_address, payment, order } =
    location.state;
  useEffect(() => {
    setValue("name", name);
    setValue("quantity", quantity);
    setValue("price", price);
    setValue("delivery_address", delivery_address);
    setValue("payment", payment);
    setValue("order", order);
  }, []);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required(),
    quantity: yup.string().required(),
    price: yup.string().required(),
    delivery_address: yup.string().required(),
    payment: yup.string().required(),
    order: yup.string().required(),
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

  const handleRegister = async (formData) => {
    // console.log(formData);

    const response = await axios.put(
      `http://localhost:3000/product/${id}`,
      formData
    );

    const result = response.data;
    console.log(result);

    if (result) {
      navigate("/");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-lg-4 mx-auto p-4 rounded-4 bg-light">
          <form onSubmit={handleSubmit((data) => handleRegister(data))}>
            <h1 className="text-center mb-3">
              <span className="text-danger"> Product Order </span>
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
              {...register("quantity")}
              type="quantity"
              placeholder="quantity"
              className="form-control mb-3"
            />
            {errors.quantity?.message && (
              <p className="text-danger">{errors.quantity?.message}</p>
            )}
            <input
              {...register("price")}
              type="text"
              placeholder="price  "
              className="form-control mb-3"
            />
            {errors.price?.message && (
              <p className="text-danger">{errors.price?.message}</p>
            )}
            <>
              <input
                {...register("delivery_address")}
                type="text"
                placeholder=" delivery_address"
                className="form-control mb-3"
              />
              {errors.delivery_address?.message && (
                <p className="text-danger">
                  {errors.delivery_address?.message}
                </p>
              )}

              <input
                {...register("payment")}
                type="text"
                placeholder=" payment"
                className="form-control mb-3"
              />
              {errors.payment?.message && (
                <p className="text-danger">{errors.payment?.message}</p>
              )}

              <input
                {...register("order")}
                type="text"
                placeholder=" order"
                className="form-control mb-3"
              />
              {errors.order?.message && (
                <p className="text-danger">{errors.order?.message}</p>
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
