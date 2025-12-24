import { useState } from "react";

const Task8 = () => {
  //Account number
  const [acNumber, setAcNumber] = useState("");
  const [acNumberErr, setAcNumberErr] = useState(false);
  const [acNumberErrMsg, setAcNumberErrMsg] = useState("");

  //IFSC code
  const [ifscCode, setIfscCode] = useState("");
  const [ifscCodeErr, setIfscCodeErr] = useState(false);
  const [ifscCodeErrMsg, setIfscCodeErrMsg] = useState("");

  //PAN number
  const [panNumber, setPanNumber] = useState("");
  const [panNumberErr, setPanNumberErr] = useState(false);
  const [panNumberErrMsg, setPanNumberErrMsg] = useState("");

  //Aadhar number
  const [adharNumber, setAdharNumber] = useState("");
  const [adharNumberErr, setAdharNumberErr] = useState(false);
  const [adharNumberErrMsg, setAdharNumberErrMsg] = useState("");

  //Nominee age
  const [age, setAge] = useState("");
  const [ageErr, setAgeErr] = useState(false);
  const [ageErrMsg, setAgeErrMsg] = useState("");

  const handleValidation = () => {
    // Reset errors
    setAcNumberErr(false);
    setIfscCodeErr(false);
    setPanNumberErr(false);
    setAdharNumberErr(false);
    setAgeErr(false);

    let isValid = true;

    //  Regex
    const acRegex = /^\d{9,18}$/;
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const adharRegex = /^\d{12}$/;

    //  Account Number Validation
    if (!acRegex.test(acNumber)) {
      isValid = false;
      setAcNumberErr(true);
      setAcNumberErrMsg("Account number 9-18 digits ka hona chahiye!");
    }

    //  IFSC Code Validation
    if (!ifscRegex.test(ifscCode)) {
      isValid = false;
      setIfscCodeErr(true);
      setIfscCodeErrMsg("Invalid IFSC! Format: ABCD0123456");
    }

    //  PAN Number Validation
    if (!panRegex.test(panNumber.toUpperCase())) {
      isValid = false;
      setPanNumberErr(true);
      setPanNumberErrMsg("Invalid PAN Number! Format: ABCDE1234F");
    }

    //  Aadhaar Number Validation
    if (!adharRegex.test(adharNumber)) {
      isValid = false;
      setAdharNumberErr(true);
      setAdharNumberErrMsg("adhar number atleast 12 digit");
    }

    //  Age Validation (Number check)
    if (age === "" || parseInt(age) < 18) {
      isValid = false;
      setAgeErr(true);
      setAgeErrMsg("Age must be 18 Year or above");
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      console.log(acNumber, ifscCode, panNumber, adharNumber, age);
    }
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-4 mx-auto p-4 bg-light rounded-4 border shadow-sm ">
          <h1 className="text-center mb-4">
            React <span className="text-success">Form</span>
          </h1>
          <input
            onChange={(e) => setAcNumber(e.target.value)}
            type="text"
            placeholder="Enter Account  Number(9-18 digit) "
            className="form-control mb-3"
          />
          {acNumberErr && <p className="text-danger">{acNumberErrMsg}</p>}
          <input
            onChange={(e) => setIfscCode(e.target.value)}
            type="text"
            placeholder="Enter IFSC Code"
            className="form-control mb-3"
          />
          {ifscCodeErr && <p className="text-danger">{ifscCodeErrMsg}</p>}
          <input
            onChange={(e) => setPanNumber(e.target.value)}
            type="text"
            placeholder="Enter PAN Number "
            className="form-control mb-3"
          />
          {panNumberErr && <p className="text-danger">{panNumberErrMsg}</p>}
          <input
            onChange={(e) => setAdharNumber(e.target.value)}
            type="text"
            placeholder="Enter Aadhaar Number"
            className="form-control mb-3"
          />
          {adharNumberErr && <p className="text-danger">{adharNumberErrMsg}</p>}
          <input
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="Enter Nominee Age(>=18)"
            className="form-control mb-4"
          />
          {ageErr && <p className="text-danger">{ageErrMsg}</p>}

          <button
            onClick={handleSubmit}
            className="form-control text-light btn btn-success"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Task8;
