import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const response = await fetch(`http://localhost:3000/registration`);
    // // console.log(response);
    // const result = await response.json();
    // // console.log(result, "@@@@@@@@");
    // setData(result);
    //###############Axios Library@@@@@@@@@@@@

    const response = await axios.get(`http://localhost:3000/registration`);
    // console.log(response.data);
    const result = response.data;
    setData(result);
  };

  const handleDelete = async (id) => {
    const isSure = confirm("Are you sure");
    if (isSure) {
      const response = await axios.delete(
        `http://localhost:3000/registration/${id}`
      );

      console.log(response.data, "delete Wallaaa");
      fetchData();
    }
  };

  const handleEdit = (item) => {
    navigate(`/edit`, {
      state: item,
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10 mt-4 mx-auto">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.password}</td>
                    <td>
                      <span>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger me-2"
                        >
                          DEL
                        </button>
                        <button
                          onClick={() => handleEdit(item)}
                          className="btn btn-warning"
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
