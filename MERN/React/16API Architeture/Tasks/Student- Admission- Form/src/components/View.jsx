import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/stu_registration`);
    // console.log(res, "########");
    const result = await res.json();
    // console.log(result, "&&&&&&&&&&&");
    setData(result);
  };
  // console.log(data);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/stu_registration/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetchData();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  const handleEdit = (item) => {
    localStorage.setItem("editData", JSON.stringify(item));
    navigate("/edit");
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-10 mx-auto">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Student_id</th>
                <th scope="col">Student_name</th>
                <th scope="col">Address</th>
                <th scope="col">dob</th>
                <th scope="col">mobile</th>
                <th scope="col">percentage</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  // console.log(item);
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.dob}</td>
                    <td>{item.mobile}</td>
                    <td>{item.percentage}</td>
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
