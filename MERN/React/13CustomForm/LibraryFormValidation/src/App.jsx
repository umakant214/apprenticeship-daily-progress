import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function App() {
  const schema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-4 mx-auto p-5 bg-light">
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <h4>Hello;'ld</h4>
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="form-control mb-4"
            />
            {errors.name && <p>{errors.name?.message}</p>}
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="form-control mb-4"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <input
              type="submit"
              className="form-control btn btn-warning"
              name=""
              id=""
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
