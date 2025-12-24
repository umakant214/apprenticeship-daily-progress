import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const submit = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-4 mx-auto p-4 bg-light">
            <h2 className="text-center mb-4">
              <span>React</span> <span>Form</span>
            </h2>

            <input
              type="text"
              name="name"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter Your Name"
              className="form-control mb-3"
            />

            <input
              type="email"
              name="email"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter Your Email"
              className="form-control mb-3"
            />

            <button
              onClick={submit}
              className="btn btn-warning form-control text-light"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
