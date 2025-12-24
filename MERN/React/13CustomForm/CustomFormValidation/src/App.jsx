import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import WithLibraryValidation from "./WithLibraryValidation";
import CustomValidation from "./CustomValidation";
function App() {
  return (
    <>
      {/* <CustomValidation /> */}
      <WithLibraryValidation />
    </>
  );
}

export default App;
