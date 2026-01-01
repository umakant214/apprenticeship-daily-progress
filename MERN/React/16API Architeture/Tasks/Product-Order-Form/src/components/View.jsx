import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/product`);
    const result = await res.json();
    setData(result);
    // console.log(result);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/product/${id}`, {
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
      <div className="row mt-4">
        <div className="col-sm-10 mx-auto">
          <h1 className="text-center mb-5">
            <span className="text-danger">Order Details</span>
            <span className="text-success">Form</span>
            <span className="text-danger">Data</span>
          </h1>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col"> Product_Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Delivery Address </th>
                <th scope="col"> Payment Method </th>
                <th scope="col"> Order Notes </th>
                <th scope="col"> Actions </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                // console.log(item);

                return (
                  <>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{item.delivery_address}</td>
                      <td>{item.payment}</td>
                      <td>{item.order}</td>
                      <td>
                        <span>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="btn  btn-danger me-3"
                          >
                            Del
                          </button>
                        </span>
                        <span>
                          <button
                            onClick={() => handleEdit(item)}
                            className="btn  btn-warning"
                          >
                            Edit
                          </button>
                        </span>
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
