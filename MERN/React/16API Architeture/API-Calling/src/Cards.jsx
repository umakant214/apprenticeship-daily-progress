import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    console.log(res, "&&&&&&&&&&&&&&&");

    const result = await res.json();
    console.log(result, "#############");

    setData(result?.products[0]);
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
                <td>UserId</td>
                <th>productId</th>
                <th>quantity</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{item?.id}</td>
                      <td>{item?.userId}</td>
                      <td>{item?.items}</td>
                      <td>{item?.completed}</td>
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

export default Cards;
