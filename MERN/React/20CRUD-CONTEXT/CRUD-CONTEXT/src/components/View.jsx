import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(AppContext);

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (item, index) => {
    setData(item);
    localStorage.setItem("editData", JSON.stringify(index));
    navigate("/edit");
  };

  return (
    <div className="row">
      <div className="col-sm-8 mx-auto">
        <table className="table">
          <thead className="table-dark">
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
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger me-2"
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
