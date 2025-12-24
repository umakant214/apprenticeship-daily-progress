import { useState } from "react";

const Task7 = () => {
  // Employee ID
  const [empId, setEmpId] = useState("");
  const [empIdErr, setEmpIdErr] = useState(false);
  const [empIdErrMsg, setEmpIdErrMsg] = useState("");

  // Company Email
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");

  // Salary
  const [salary, setSalary] = useState("");
  const [salaryErr, setSalaryErr] = useState(false);
  const [salaryErrMsg, setSalaryErrMsg] = useState("");

  // Experience
  const [experience, setExperience] = useState("");
  const [experienceErr, setExperienceErr] = useState(false);
  const [experienceErrMsg, setExperienceErrMsg] = useState("");

  // Joining Date
  const [joiningDate, setJoiningDate] = useState("");
  const [joiningDateErr, setJoiningDateErr] = useState(false);
  const [joiningDateErrMsg, setJoiningDateErrMsg] = useState("");

  const validate = () => {
    let isValid = true;

    // reset errors
    setEmpIdErr(false);
    setEmailErr(false);
    setSalaryErr(false);
    setExperienceErr(false);
    setJoiningDateErr(false);

    // regex
    const empIdRegex = /^Emp-\d{3}$/;
    const companyEmailRegex = /^[a-zA-Z0-9._%+-]+@company\.com$/;
    const salaryRegex = /^[0-9]+$/;
    const experienceRegex = /^(?:[0-9]|[1-3][0-9]|40)$/;

    // Employee ID
    if (empId.trim() === "") {
      isValid = false;
      setEmpIdErr(true);
      setEmpIdErrMsg("Employee ID is required");
    } else if (!empIdRegex.test(empId)) {
      isValid = false;
      setEmpIdErr(true);
      setEmpIdErrMsg("Format should be Emp-123");
    }

    // Company Email
    if (email.trim() === "") {
      isValid = false;
      setEmailErr(true);
      setEmailErrMsg("Company email is required");
    } else if (!companyEmailRegex.test(email)) {
      isValid = false;
      setEmailErr(true);
      setEmailErrMsg("Email must end with @company.com");
    }

    // Salary
    if (salary.trim() === "") {
      isValid = false;
      setSalaryErr(true);
      setSalaryErrMsg("Salary is required");
    } else if (!salaryRegex.test(salary)) {
      isValid = false;
      setSalaryErr(true);
      setSalaryErrMsg("Salary must contain digits only");
    } else if (salary < 10000) {
      isValid = false;
      setSalaryErr(true);
      setSalaryErrMsg("Minimum salary is 10000");
    }

    // Experience
    if (experience.trim() === "") {
      isValid = false;
      setExperienceErr(true);
      setExperienceErrMsg("Experience is required");
    } else if (!experienceRegex.test(experience)) {
      isValid = false;
      setExperienceErr(true);
      setExperienceErrMsg("Experience must be between 0–40 years");
    }

    // Joining Date
    if (joiningDate === "") {
      isValid = false;
      setJoiningDateErr(true);
      setJoiningDateErrMsg("Joining date is required");
    }

    return isValid;
  };

  const submit = () => {
    if (validate()) {
      console.log({
        empId,
        email,
        salary,
        experience,
        joiningDate,
      });
    }
  };

  return (
    <div className="col-sm-5 mx-auto mt-5 p-4 bg-light rounded-4 shadow-sm">
      <h3 className="text-center mb-4">
        Employee <span className="text-success">Form</span>
      </h3>

      <input
        className="form-control mb-2"
        placeholder="Employee ID (Emp-123)"
        onChange={(e) => setEmpId(e.target.value)}
      />
      {empIdErr && <p className="text-danger">{empIdErrMsg}</p>}

      <input
        className="form-control mb-2"
        placeholder="Company Email (user@company.com)"
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailErr && <p className="text-danger">{emailErrMsg}</p>}

      <input
        className="form-control mb-2"
        placeholder="Salary"
        onChange={(e) => setSalary(e.target.value)}
      />
      {salaryErr && <p className="text-danger">{salaryErrMsg}</p>}

      <input
        className="form-control mb-2"
        placeholder="Experience (0–40 years)"
        onChange={(e) => setExperience(e.target.value)}
      />
      {experienceErr && <p className="text-danger">{experienceErrMsg}</p>}

      <input
        type="date"
        className="form-control mb-3"
        onChange={(e) => setJoiningDate(e.target.value)}
      />
      {joiningDateErr && <p className="text-danger">{joiningDateErrMsg}</p>}

      <button onClick={submit} className="btn btn-success w-100">
        Submit
      </button>
    </div>
  );
};

export default Task7;
