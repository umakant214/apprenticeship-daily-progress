import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useState } from "react";
function User() {
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
                <th>firstName</th>
                <th>lastName</th>
                <th>maidenName</th>
                <th>age</th>
                <th>gender</th>
                <th>email</th>
                <th>phone</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{item?.id}</td>
                      <td>{item?.firstName}</td>
                      <td>{item?.lastName}</td>
                      <td>{item?.maidenName}</td>
                      <td>{item?.age}</td>
                      <td>{item?.gender}</td>
                      <td>{item?.email}</td>
                      <td>{item?.phone}</td>
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

export default User;
