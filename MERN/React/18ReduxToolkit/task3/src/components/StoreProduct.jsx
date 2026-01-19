import React from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/Slice/productSlice";
const StoreProduct = () => {
  const dispatch = useDispatch();
  //   const handleSubmit = (FormData) => {
  //     console.log(FormData);

  //     dispatch(
  //       setProduct(
  //         // console.log(FormData)

  //         FormData
  //         // { name: "Umakant", email: "u@gmail.com" },
  //         // { name: "Abhi", email: "abhi@gmail.com" },
  //         // { name: "Harsh", email: "r@gmail.com" },
  //       )
  //     );
  //   };
  return (
    <>
      {/* <div className="row">
        <div className="col-sm-4 mx-auto">
          <form onSubmit={() => handleSubmit(FormData)}>
            <h1 className="text-center mb-4">Registration from</h1>
            <input
              type="text"
              placeholder="Name"
              className="form-control mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
            />
            <input
              type="password"
              placeholder="password"
              className="form-control mb-3"
            />
            <input
              type="submit"
              className="form-control mb-3 btn btn-warning"
            />
          </form>
        </div>
      </div> */}
      <h1>Store Data</h1>
      <button
        onClick={() =>
          dispatch(
            setProduct([
              { name: "Umakant", email: "u@gmail.com" },
              { name: "Abhi", email: "abhi@gmail.com" },
              { name: "Harsh", email: "r@gmail.com" },
            ])
          )
        }
      >
        send
      </button>
    </>
  );
};

export default StoreProduct;
