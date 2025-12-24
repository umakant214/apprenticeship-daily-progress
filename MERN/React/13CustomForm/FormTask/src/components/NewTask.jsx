import React, { use, useState } from "react";

const NewTask = () => {
  const [Formdata, setFormData] = useState({
    name: "",
    password: "",
  });
  const click = () => {
    console.log(Formdata);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3 mt-5">
          <input
            onChange={(e) =>
              setFormData((a) => ({ ...a, name: e.target.value }))
            }
            type="text"
            className="form-control"
          />
          <input type="text" className="form-control" />
          <button onClick={click} className="btn btn-danger mt-5">
            sad
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTask;
