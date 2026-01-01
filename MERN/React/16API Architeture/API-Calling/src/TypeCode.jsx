import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
function TypeCode() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");

    const result = await res.json();
    console.log(result, "#############");

    setData(result);
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
                <th>postId</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                console.log(item);

                return (
                  <>
                    <tr>
                      <td>{item?.id}</td>
                      <td>{item?.postId}</td>
                      <td>{item?.name}</td>
                      <td>{item?.email}</td>
                      <td>{item?.body}</td>
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

export default TypeCode;
