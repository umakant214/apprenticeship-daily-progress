import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataArr"));
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
        setUserData(data);
        localStorage.setItem("dataArr", JSON.stringify(data));
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
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.password}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(index)}
                          className="btn btn-danger me-3"
                        >
                          Del
                        </button>
                        <button
                          onClick={() => handleEdit(item, index)}
                          className="btn btn-warning me-3"
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
