import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
function Todo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    console.log(res, "&&&&&&&&&&&&&&&");

    const result = await res.json();
    console.log(result, "#############");

    setData(result?.products);
  };
  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-10 mx-auto">
          <h1 className="text-center mb-3 text-danger">
            API Calling By Amit Sir
          </h1>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>SR.</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{item?.id}</td>
                      <td>{item?.title}</td>
                      <td>{item?.category}</td>
                      <td>{item?.price}</td>
                      <td>
                        <img
                          height={50}
                          width={50}
                          src={item?.images[0]}
                          alt=""
                        />
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
}

export default Todo;
