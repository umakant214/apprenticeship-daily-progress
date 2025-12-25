import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
// import Skill from "./components/Skill";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";
// import Contact from "./components/contact";
import { lazy, Suspense } from "react";
const Hero = lazy(() => import("./components/Hero"));
const Skill = lazy(() => import("./components/Skill"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/contact"));

import { RotatingLines } from "react-loader-spinner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </>
          }
        >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
