import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
