import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const View = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/user");
    const result = await res.json();
    // console.log(result, "#############");
    setData(result);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/user/${id}`, {
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
    // localStorage.setItem("editData", JSON.stringify(item));
    navigate("/edit", {
      state: item,
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-10 mx-auto ">
          <h1 className="text-center text-success mb-4">
            Product <span className="text-dark">List</span>
          </h1>
          <table className="table">
            <thead className="table table-info">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">UserName</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.username}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
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
                            className="btn btn-warning text-light"
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
