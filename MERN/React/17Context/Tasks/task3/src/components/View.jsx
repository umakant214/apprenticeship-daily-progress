import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const View = () => {
  const { formData } = useContext(AppContext);

  return (
    <>
      <div className="row">
        <div className="col-sm-8 mx-auto">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
              </tr>
            </thead>

            <tbody>
              {formData?.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default View;
