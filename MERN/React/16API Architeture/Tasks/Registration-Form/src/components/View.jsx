import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/registration`);
    const result = await res.json();
    setData(result);
    // console.log(result);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/registration/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    // console.log(res);
    const result = await res.json();
    // console.log(result);
    if (result) {
      fetchData();
    }
  };

  const handleEdit = (item) => {
    navigate("/edit", {
      state: item,
    });
    // console.log(item);
  };
  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-10 mx-auto">
          <h1 className="text-center mb-5">
            <span className="text-danger">Registration</span>
            <span className="text-success">Form</span>
            <span className="text-danger">Data</span>
          </h1>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Password</th>
                <th scope="col">Confirm Password</th>
                <th scope="col">Actions </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                // console.log(item);

                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.gender}</td>
                    <td>{item.password}</td>
                    <td>{item.confirm_password}</td>
                    <td>
                      <span>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger me-2"
                        >
                          Del
                        </button>
                      </span>
                      <span>
                        <button
                          onClick={() => handleEdit(item)}
                          className="btn btn-warning text-light"
                        >
                          Edit
                        </button>
                      </span>
                    </td>
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

export default View;
