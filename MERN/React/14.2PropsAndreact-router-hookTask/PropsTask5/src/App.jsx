import { useState } from "react";
import Student from "./components/Student";
function App() {
  const [name, setName] = useState("Umakant");
  const [rollNum, setRollNum] = useState(20);
  const [marks, setMarks] = useState(50);
  const [totalMarks, setTotalMarks] = useState(200);
  const [subject, setSubject] = useState("Math");
  const [schoolName, setSchoolName] = useState("Techpile");
  return (
    <>
      <p>Parent Component</p>
      <Student
        data={{ name, rollNum, marks, totalMarks, subject, schoolName }}
      />
    </>
  );
}

export default App;
