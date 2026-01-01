import React from "react";
import { useContext } from "react";
import { AppContext } from "../context.jsx/AppContext";

const Table = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <div className="row">
        <div className="col-sm-8 mx-auto">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
