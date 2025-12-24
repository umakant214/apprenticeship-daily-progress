import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const Edit = () => {
  const { id } = useParams();
  useEffect(() => {
    const editData = JSON.parse(localStorage.getItem("editData"));
    setValue("houseNumber", editData.houseNumber);
    setValue("streetName", editData.streetName);
    setValue("cityName", editData.cityName);
    setValue("stateCode", editData.stateCode);
    setValue("pinCode", editData.pinCode);
  }, []);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    houseNumber: yup.number().required(),
    streetName: yup.string().required().min(3).max(20),
    cityName: yup.string().required().min(3).max(20),
    stateCode: yup.string().required(),
    pinCode: yup.string().required().min(6).max(6),
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
    navigate("/view");
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-6 shadow-sm mx-auto col-lg-4 bg-light border rounded-4 p-4">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
            <h2 className="text-center mb-4">
              Update Details <span className="text-danger"> Form</span>
            </h2>
            <input
              {...register("houseNumber")}
              type="text"
              placeholder="House Number"
              className="form-control mb-3"
            />
            {errors.houseNumber && (
              <p className="text-danger">{errors.houseNumber.message}</p>
            )}
            <input
              {...register("streetName")}
              type="text"
              placeholder="Street Name"
              className="form-control mb-3"
            />
            {errors.streetName && (
              <p className="text-danger">{errors.streetName?.message}</p>
            )}
            <input
              {...register("cityName")}
              type="text"
              placeholder="City Name"
              className="form-control mb-3"
            />
            {errors.cityName && (
              <p className="text-danger">{errors.cityName?.message}</p>
            )}
            <input
              {...register("stateCode")}
              type="text"
              placeholder="State Code"
              className="form-control mb-3"
            />
            {errors.stateCode && (
              <p className="text-danger">{errors.stateCode?.message}</p>
            )}
            <input
              {...register("pinCode")}
              type="text"
              placeholder="PinCode"
              className="form-control mb-3"
            />
            {errors.pinCode && (
              <p className="text-danger">{errors.pinCode?.message}</p>
            )}
            <input
              type="submit"
              value="Update"
              className="form-control btn btn-danger mb-3"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
