import "./App.css";
import Swal from "sweetalert2";

function App() {
  const demo = () => {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  };
  return (
    <>
      <button onClick={demo}>Click Me</button>
    </>
  );
}

export default App;
