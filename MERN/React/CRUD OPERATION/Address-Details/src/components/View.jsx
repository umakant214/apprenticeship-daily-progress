import { useEffect } from "react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
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
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <div className="row">
        <div className="col-sm-12 bg-light shadow-sm rounded-4 col-lg-8 mx-auto">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">House Number</th>
                <th scope="col">Street Name</th>
                <th scope="col">City Name</th>
                <th scope="col">State Code</th>
                <th scope="col">Pin Code</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.houseNumber}</td>
                      <td>{item.streetName}</td>
                      <td>{item.cityName}</td>
                      <td>{item.stateCode}</td>
                      <td>{item.pinCode}</td>
                      <td>
                        <span className="me-3 fs-5 text-danger">
                          <FaRegTrashCan onClick={() => handleDelete(index)} />
                        </span>
                        <span className="fs-5 text-warning">
                          <FaRegEdit onClick={() => handleEdit(item, index)} />
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
