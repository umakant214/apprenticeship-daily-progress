import { useState } from "react";

const Task6 = () => {
  // College Name
  const [college, setCollege] = useState("");
  const [collegeErr, setCollegeErr] = useState(false);
  const [collegeErrMsg, setCollegeErrMsg] = useState("");

  // Course Code
  const [courseCode, setCourseCode] = useState("");
  const [courseCodeErr, setCourseCodeErr] = useState(false);
  const [courseCodeErrMsg, setCourseCodeErrMsg] = useState("");

  // Enrollment Number
  const [enrollment, setEnrollment] = useState("");
  const [enrollmentErr, setEnrollmentErr] = useState(false);
  const [enrollmentErrMsg, setEnrollmentErrMsg] = useState("");

  // Passing Year
  const [passingYear, setPassingYear] = useState("");
  const [passingYearErr, setPassingYearErr] = useState(false);
  const [passingYearErrMsg, setPassingYearErrMsg] = useState("");

  // CGPA
  const [cgpa, setCgpa] = useState("");
  const [cgpaErr, setCgpaErr] = useState(false);
  const [cgpaErrMsg, setCgpaErrMsg] = useState("");

  const validate = () => {
    let isValid = true;

    // reset errors
    setCollegeErr(false);
    setCourseCodeErr(false);
    setEnrollmentErr(false);
    setPassingYearErr(false);
    setCgpaErr(false);

    // regex
    const collegeRegex = /^[A-Za-z ]{3,}$/;
    const courseCodeRegex = /^[A-Z]{2,4}[0-9]{2,4}$/;
    const enrollmentRegex = /^[A-Za-z0-9]{6,15}$/;
    const yearRegex = /^(19|20)\d{2}$/;
    const cgpaRegex = /^(10(\.0)?|[0-9](\.[0-9])?)$/;

    // College
    if (college.trim() === "") {
      isValid = false;
      setCollegeErr(true);
      setCollegeErrMsg("College name is required");
    } else if (!collegeRegex.test(college)) {
      isValid = false;
      setCollegeErr(true);
      setCollegeErrMsg("Only letters & spaces (min 3 chars)");
    }

    // Course Code
    if (courseCode.trim() === "") {
      isValid = false;
      setCourseCodeErr(true);
      setCourseCodeErrMsg("Course code is required");
    } else if (!courseCodeRegex.test(courseCode)) {
      isValid = false;
      setCourseCodeErr(true);
      setCourseCodeErrMsg("Example: CS101, MCA204");
    }

    // Enrollment Number
    if (enrollment.trim() === "") {
      isValid = false;
      setEnrollmentErr(true);
      setEnrollmentErrMsg("Enrollment number is required");
    } else if (!enrollmentRegex.test(enrollment)) {
      isValid = false;
      setEnrollmentErr(true);
      setEnrollmentErrMsg("6–15 alphanumeric characters");
    }

    // Passing Year
    if (passingYear.trim() === "") {
      isValid = false;
      setPassingYearErr(true);
      setPassingYearErrMsg("Passing year is required");
    } else if (!yearRegex.test(passingYear)) {
      isValid = false;
      setPassingYearErr(true);
      setPassingYearErrMsg("Enter valid year (YYYY)");
    }

    // CGPA
    if (cgpa.trim() === "") {
      isValid = false;
      setCgpaErr(true);
      setCgpaErrMsg("CGPA is required");
    } else if (!cgpaRegex.test(cgpa)) {
      isValid = false;
      setCgpaErr(true);
      setCgpaErrMsg("CGPA must be between 0.0 and 10.0");
    }

    return isValid;
  };

  const submit = () => {
    if (validate()) {
      console.log({
        college,
        courseCode,
        enrollment,
        passingYear,
        cgpa,
      });
    }
  };

  return (
    <div className="col-sm-5 mx-auto mt-5 p-4 bg-light rounded-4 shadow-sm">
      <h3 className="text-center mb-4">Academic Details</h3>

      <input
        type="text"
        placeholder="College Name"
        className="form-control mb-2"
        onChange={(e) => setCollege(e.target.value)}
      />
      {collegeErr && <p className="text-danger">{collegeErrMsg}</p>}

      <input
        type="text"
        placeholder="Course Code (e.g. CS101)"
        className="form-control mb-2"
        onChange={(e) => setCourseCode(e.target.value)}
      />
      {courseCodeErr && <p className="text-danger">{courseCodeErrMsg}</p>}

      <input
        type="text"
        placeholder="Enrollment Number"
        className="form-control mb-2"
        onChange={(e) => setEnrollment(e.target.value)}
      />
      {enrollmentErr && <p className="text-danger">{enrollmentErrMsg}</p>}

      <input
        type="text"
        placeholder="Passing Year"
        className="form-control mb-2"
        onChange={(e) => setPassingYear(e.target.value)}
      />
      {passingYearErr && <p className="text-danger">{passingYearErrMsg}</p>}

      <input
        type="text"
        placeholder="CGPA (0.0 - 10.0)"
        className="form-control mb-3"
        onChange={(e) => setCgpa(e.target.value)}
      />
      {cgpaErr && <p className="text-danger">{cgpaErrMsg}</p>}

      <button onClick={submit} className="btn btn-success w-100">
        Submit
      </button>
    </div>
  );
};

export default Task6;
