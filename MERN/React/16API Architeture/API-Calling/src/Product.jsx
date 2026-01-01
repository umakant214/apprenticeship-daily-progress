import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://api.jsoning.com/mock/public/coupons");

    const result = await res.json();
    console.log(result, "@@@@@@@@");
    setData(result);
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
                <th>code</th>
                <th>discount</th>
                <th>start_date</th>
                <th>end_date</th>
                <th>conditions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{item?.id}</td>
                      <td>{item?.code}</td>
                      <td>{item?.discount}</td>
                      <td>{item?.start_date}</td>
                      <td>{item?.end_date}</td>
                      <td>{item?.conditions}</td>
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

export default Product;
