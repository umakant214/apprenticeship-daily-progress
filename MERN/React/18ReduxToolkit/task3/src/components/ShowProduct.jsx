import React from "react";
import { useSelector } from "react-redux";
const ShowProduct = () => {
  const data = useSelector((state) => state.product);
  //   console.log(data);

  return (
    <>
      <div className="row">
        <div className="col-sm-10 mx-auto">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                console.log(item);

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
