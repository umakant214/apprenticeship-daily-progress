import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
function NewProduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/users");

    const result = await res.json();
    console.log(result, "@@@@@@@@");
    setData(result?.users);
  };
  return (
    <>
      <div className="row mt-4">
        <div className="col-sm-12 mx-auto">
          <h1 className="text-center mb-3 text-danger">
            API Calling By Amit Sir
          </h1>
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th>SR.</th>
                <th>name</th>
                <th>description</th>
                <th>price</th>
                <th>unit</th>
                <th>availability</th>
                <th>brand</th>
                <th>category</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{item?.product_id}</td>
                      <td>{item?.name}</td>
                      <td>{item?.description}</td>
                      <td>{item?.price}</td>
                      <td>{item?.unit}</td>
                      <td>{item?.availability}</td>
                      <td>{item?.brand}</td>
                      <td>{item?.category}</td>
                      <td>
                        <img height={50} width={50} src={item?.image} alt="" />
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

export default NewProduct;
