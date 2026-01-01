import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/event_registration_form`);
    const result = await res.json();
    setData(result);
    // console.log(result);
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `http://localhost:3000/event_registration_form/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
      <div className="row mt-4">
        <div className="col-sm-10 mx-auto">
          <h1 className="text-center mb-5">
            <span className="text-danger">Event Registration Form </span>
            <span className="text-success">Data</span>
          </h1>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>Sr.No</th>
                <th>Participant Name </th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th> Event Date </th>
                <th> Number of Attendees </th>
                <th>Meal Preference </th>
                <th>Actions </th>
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
                    <td>{item.date}</td>
                    <td>{item.attendees}</td>
                    <td>{item.meal}</td>
                    <td>
                      <span>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-danger me-1"
                        >
                          Del
                        </button>
                      </span>
                    </td>
                    <td>
                      <span>
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
