import { useState } from "react";

const Task4 = () => {
  // house
  const [houseNumber, setHouseNumber] = useState("");
  const [houseNumErr, setHouseNumErr] = useState(false);
  const [houseNumErrMsg, setHouseNumErrMsg] = useState("");

  // street
  const [streetName, setStreetName] = useState("");
  const [streetNameErr, setStreetNameErr] = useState(false);
  const [streetNameErrMsg, setStreetNameErrMsg] = useState("");

  // city
  const [city, setCity] = useState("");
  const [cityErr, setCityErr] = useState(false);
  const [cityErrMsg, setCityErrMsg] = useState("");

  // state
  const [stateCode, setStateCode] = useState("");
  const [stateCodeErr, setStateCodeErr] = useState(false);
  const [stateCodeErrMsg, setStateCodeErrMsg] = useState("");

  // pincode
  const [pincode, setPincode] = useState("");
  const [pincodeErr, setPincodeErr] = useState(false);
  const [pincodeErrMsg, setPincodeErrMsg] = useState("");

  const Validation = () => {
    let isValid = true;

    // reset errors
    setHouseNumErr(false);
    setStreetNameErr(false);
    setCityErr(false);
    setStateCodeErr(false);
    setPincodeErr(false);

    // House number
    const regex = /^[A-Za-z0-9/-]+$/;
    if (houseNumber.trim() === "") {
      isValid = false;
      setHouseNumErr(true);
      setHouseNumErrMsg("House number is required");
    } else if (!regex.test(houseNumber)) {
      isValid = false;
      setHouseNumErr(true);
      setHouseNumErrMsg("Only letters, numbers, / and - allowed");
    }

    // Street
    if (streetName.trim() === "") {
      isValid = false;
      setStreetNameErr(true);
      setStreetNameErrMsg("Street name is required");
    } else if (streetName.trim().length < 3) {
      isValid = false;
      setStreetNameErr(true);
      setStreetNameErrMsg("Street name 3 char");
    }

    // City
    if (city.trim() === "") {
      isValid = false;
      setCityErr(true);
      setCityErrMsg("City is required");
    }

    // State
    if (stateCode.trim() === "") {
      isValid = false;
      setStateCodeErr(true);
      setStateCodeErrMsg("State code is required");
    }

    // Pincode
    if (pincode.trim() === "") {
      isValid = false;
      setPincodeErr(true);
      setPincodeErrMsg("Pincode is required");
    } else if (pincode.length !== 6) {
      isValid = false;
      setPincodeErr(true);
      setPincodeErrMsg("Pincode must be 6 digits");
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (Validation()) {
      console.log(houseNumber, streetName, city, stateCode, pincode);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-sm-4 mx-auto p-4 bg-light rounded-4 shadow-sm">
        <h2 className="text-center mb-4">
          React <span className="text-success">Form</span>
        </h2>

        <input
          type="text"
          placeholder="House Number"
          className="form-control mb-2"
          onChange={(e) => setHouseNumber(e.target.value)}
        />
        {houseNumErr && <p className="text-danger">{houseNumErrMsg}</p>}

        <input
          type="text"
          placeholder="Street Name"
          className="form-control mb-2"
          onChange={(e) => setStreetName(e.target.value)}
        />
        {streetNameErr && <p className="text-danger">{streetNameErrMsg}</p>}

        <input
          type="text"
          placeholder="City"
          className="form-control mb-2"
          onChange={(e) => setCity(e.target.value)}
        />
        {cityErr && <p className="text-danger">{cityErrMsg}</p>}

        <input
          type="text"
          placeholder="State Code"
          className="form-control mb-2"
          onChange={(e) => setStateCode(e.target.value)}
        />
        {stateCodeErr && <p className="text-danger">{stateCodeErrMsg}</p>}

        <input
          type="text"
          placeholder="Pincode"
          className="form-control mb-3"
          onChange={(e) => setPincode(e.target.value)}
        />
        {pincodeErr && <p className="text-danger">{pincodeErrMsg}</p>}

        <button onClick={handleSubmit} className="btn btn-success w-100">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Task4;
