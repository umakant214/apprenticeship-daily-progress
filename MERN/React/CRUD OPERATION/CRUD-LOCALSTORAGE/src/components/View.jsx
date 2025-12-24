import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
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

  //delete
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
        //delete
        let data = JSON.parse(localStorage.getItem("dataArr"));
        data.splice(id, 1);
        localStorage.setItem("dataArr", JSON.stringify(data));
        setUserData(data);
        ///delete
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
        <div className="col-sm-8 mx-auto">
          <h2 className=" text-center mb-4">
            User <span className="text-danger"> Registration Data</span>
          </h2>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.mobile}</td>
                      <td>
                        <span>
                          <FaTrash
                            onClick={() => handleDelete(index)}
                            className="text-danger me-3 fs-5"
                          />
                        </span>
                        <span>
                          <FaRegEdit
                            onClick={() => handleEdit(item, index)}
                            className="text-warning fs-5"
                          />
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
