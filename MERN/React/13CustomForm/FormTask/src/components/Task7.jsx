import { useState } from "react";

const Task7 = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [courseFee, setCourseFee] = useState("");

  const submit = () => {
    console.log(courseName, courseDuration, instructorName, courseFee);
  };

  return (
    <div className="row my-4">
      <div className="col-sm-4 mx-auto bg-light rounded-3 p-4 py-5">
        <h4 className="text-center text-uppercase fw-bold mb-4">
          Create <span className="text-warning"> Account</span>
        </h4>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Course Duration"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Instructor Name"
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Course Fee"
          value={courseFee}
          onChange={(e) => setCourseFee(e.target.value)}
        />

        <button onClick={submit} className="btn btn-warning text-light w-100">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Task7;
