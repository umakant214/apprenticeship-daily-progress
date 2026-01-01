import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/contact`);
    // console.log(res, "########");
    const result = await res.json();
    // console.log(result, "&&&&&&&&&&&");
    setData(result);
  };
  // console.log(data);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/contact/${id}`, {
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
    // console.log(item);
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
                <th scope="col">Sr.No</th>
                <th scope="col">name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
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
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.subject}</td>
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
                          className="btn btn-warning me-2 text-light"
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
