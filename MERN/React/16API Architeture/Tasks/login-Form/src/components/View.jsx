import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/login`);
    const result = await res.json();
    setData(result);
    //console.log(result, "@@@@@@@@@");
  };
  //console.log(data, "$$$$$$$$$");

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/login/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result) {
      fetchData();
    }
  };

  const handleEdit = (item) => {
    navigate("/edit", {
      state: item,
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10 mx-auto">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                // console.log(item);
                return (
                  <tr key={item}>
                    <th scope="row">{item.id}</th>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
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
                          className="btn btn-warning me-2"
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
