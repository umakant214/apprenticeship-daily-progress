import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const Edit = () => {
  const { id } = useParams();
  useEffect(() => {
    const editData = JSON.parse(localStorage.getItem("editData"));
    setValue("password", editData.password);
    setValue("confirmPassword", editData.confirmPassword);
    setValue("securityPin", editData.securityPin);
    setValue("email", editData.email);
  }, []);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    password: yup.string().required().min(8).max(16),
    confirmPassword: yup.string().required().min(8).max(16),
    securityPin: yup.string().required().min(4).max(4),
    email: yup.string().required().email(),
    checkbox: yup.boolean().oneOf([true], "You must accept the terms"),
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

  const handleUpdate = (formData) => {
    const data = JSON.parse(localStorage.getItem("dataArr"));
    data[id] = formData;
    localStorage.setItem("dataArr", JSON.stringify(data));
    navigate("/view");
  };
  return (
    <>
      <div className="row mt-2">
        <div className="col-sm-8 col-lg-4 p-4 shadow-sm border rounded-4 bg-light mx-auto">
          <form onSubmit={handleSubmit((data) => handleUpdate(data))}>
            <h2 className="text-center mb-4">
              <span className="text-danger">U</span>pdate Security
              <span className="text-danger">Form</span>
            </h2>
            <input
              {...register("password")}
              type="text"
              placeholder="Password"
              className="form-control mb-3"
            />
            {errors.password && (
              <p className="text-danger">{errors.password?.message}</p>
            )}
            <input
              {...register("confirmPassword")}
              type="text"
              placeholder="Confirm Password"
              className="form-control mb-3"
            />
            {errors.confirmPassword && (
              <p className="text-danger">{errors.confirmPassword?.message}</p>
            )}
            <input
              {...register("securityPin")}
              type="text"
              placeholder="Security Pin"
              className="form-control mb-3"
            />
            {errors.securityPin && (
              <p className="text-danger">{errors.securityPin?.message}</p>
            )}
            <input
              {...register("email")}
              type="text"
              placeholder="Recovery Email"
              className="form-control mb-3"
            />
            {errors.email && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
            <div className="form-check mb-3">
              <input
                {...register("checkbox")}
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="checkDefault"
              />

              <label className="form-check-label" htmlFor="checkDefault">
                Terms Accepted
              </label>
              {errors.checkbox && (
                <p className="text-danger">{errors.checkbox.message}</p>
              )}
            </div>
            <input
              type="submit"
              value="Submit"
              className="form-control btn btn-danger"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
