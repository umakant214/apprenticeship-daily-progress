import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/feedback_form`);
    const result = await res.json();
    setData(result);
    // console.log(result);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/feedback_form/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result) {
      Swal.fire({
        title: "Delete Data",
        text: "Delete successfully",
        icon: "danger",
      });
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
      <div className="row mt-4">
        <div className="col-sm-10 mx-auto">
          <h1 className="text-center mb-5">
            <span className="text-danger">Job Application</span>
            <span className="text-success">Form</span>
            <span className="text-danger">Data</span>
          </h1>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col"> Name</th>
                <th scope="col">Email</th>
                <th scope="col">Rating</th>
                <th scope="col">Feedback</th>
                <th scope="col">Actions</th>
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
                    <td>{item.rating}</td>
                    <td>{item.message}</td>
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
