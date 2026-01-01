import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Table = () => {
  const { product } = useContext(AppContext);

  return (
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th>Sr.No</th>
          <th>Name</th>
          <th>price</th>
          <th>category</th>
          <th>stock</th>
        </tr>
      </thead>

      <tbody>
        {product.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
