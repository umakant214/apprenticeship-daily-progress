import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/registration`);
    const result = await res.json();
    // console.log(result, "PPPPPPPPPPPPP");
    setData(result);
  };
  //   console.log(data, "{{{{{{{{");

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/registration/${id}`, {
      method: "DELETE",
      "Content-type": "application/json",
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
        <div className="col-sm-8 mx-auto">
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
              {data.map((item, index) => {
                // console.log(item);

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
