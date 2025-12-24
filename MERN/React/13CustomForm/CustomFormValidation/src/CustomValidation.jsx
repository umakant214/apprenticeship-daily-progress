import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
function CustomValidation() {
  let [name, setName] = useState("");
  let [nameErr, setNameErr] = useState(false);
  let [nameErrMsg, setNameErrMsg] = useState("");

  let [email, setEmail] = useState("");
  let [emailErr, setEmailErr] = useState(false);
  let [emailErrMsg, setEmailErrMsg] = useState("");
  const handleValidation = () => {
    let isValid = true;
    setNameErr(false);
    setNameErrMsg(false);
    setEmailErrMsg(false);
    if (name.trim().length === 0) {
      isValid = false;
      setNameErr(true);
      setNameErrMsg("Name is required fields");
    } else if (name.trim().length < 3) {
      isValid = false;
      setNameErr(true);
      setNameErrMsg("Name atleast 3 char");
    }

    // email
    if (email.trim().length === 0) {
      isValid = false;
      setEmailErr(true);
      setEmailErrMsg("email is required fields");
    } else if (email.trim().length < 3) {
      isValid = false;
      setEmailErr(true);
      setEmailErrMsg("email atleast 3 char");
    }

    return isValid;
  };
  const handleSubmit = () => {
    if (handleValidation()) {
      console.log(name, "okk");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-4 border border-1 rounded-4 shadow-sm py-5 mx-auto p-4 bg-light">
            <h2 className="text-center mb-4">
              <span>React</span> <span className="text-success">Form</span>
            </h2>

            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="form-control mb-4"
            />
            {nameErr && <p className="text-danger">{nameErrMsg}</p>}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-control mb-4"
            />
            {emailErr && <p className="text-danger">{emailErrMsg}</p>}
            <button
              onClick={handleSubmit}
              className="btn btn-success form-control text-light"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomValidation;
