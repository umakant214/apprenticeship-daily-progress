import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function WithLibraryValidation() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Registration = () => {
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-5 border border-1 rounded-4 shadow-sm py-5 mx-auto p-4 bg-light">
            <form onSubmit={handleSubmit((d) => Registration(d))}>
              <h2 className="text-center mb-4">
                <span>React</span> <span className="text-success">Form</span>
              </h2>

              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control mb-4"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-danger">{errors.name?.message}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="form-control mb-4"
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}

              <input
                className="btn btn-success form-control text-light"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithLibraryValidation;
