import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const View = () => {
  const nav = useNavigate();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("dataArr"));
    setUserData(data);
  }, []);

  const handleDelete = (id) => {
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
        const data = JSON.parse(localStorage.getItem("dataArr"));
        data.splice(id, 1);
        localStorage.setItem("dataArr", JSON.stringify(data));
        setUserData(data);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleEdit = (userData, id) => {
    localStorage.setItem("editData", JSON.stringify(userData));
    nav(`/edit/${id}`);
  };
  return (
    <>
      <div className="row ">
        <div className="col-sm-8 mx-auto">
          <table className="table ">
            <thead className="table table-success  ">
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">Password</th>
                <th scope="col">Confirm Password</th>
                <th scope="col">Security Pin</th>
                <th scope="col">Recovery Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.password}</td>
                      <td>{item.confirmPassword}</td>
                      <td>{item.securityPin}</td>
                      <td>{item.email}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(index)}
                          className="btn btn-danger me-4"
                        >
                          Del
                        </button>
                        <button
                          onClick={() => handleEdit(item, index)}
                          className="btn btn-warning text-light"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </>
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
