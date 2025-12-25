import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const StudentForm = lazy(() => import("./components/StudentForm"));
const StudentList = lazy(() => import("./components/StudentList"));
const StudentDetails = lazy(() => import("./components/StudentDetails"));
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <div>Loading....</div>
            </>
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/studentForm" element={<StudentForm />} />
            <Route path="/studentList" element={<StudentList />} />
            <Route path="/studentDetails" element={<StudentDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
