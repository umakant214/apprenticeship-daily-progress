import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/product`);
    const result = response.data;
    setData(result);
  };
  // console.log(data, "@@@@@@@@@@@@@@");
  const handleDelete = (id) => {
    const isSure = confirm("Are you Sure");
    if (isSure) {
      const response = axios.delete(`http://localhost:3000/product/${id}`);
      const result = response.data;
      if (result) {
        fetchData();
      }
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
                <th>Sr.No</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delivery_address</th>
                <th>Payment</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
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
                          className="btn btn-danger me-2"
                        >
                          Del
                        </button>
                      </span>
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
