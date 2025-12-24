import React from "react";

const Result = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.rollNum}</p>
      <p>{data.marks}</p>
      <p>{data.totalMarks}</p>
      <p>{data.subject}</p>
      <p>{data.schoolName}</p>
    </div>
  );
};

export default Result;
