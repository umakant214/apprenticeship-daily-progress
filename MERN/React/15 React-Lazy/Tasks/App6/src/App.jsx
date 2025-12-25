import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const TodoItem = lazy(() => import("./components/TodoItem"));
const TodoInput = lazy(() => import("./components/TodoInput"));
const TodoList = lazy(() => import("./components/TodoList"));
const Filter = lazy(() => import("./components/Filter"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <div>Loading.......</div>
            </>
          }
        >
          <Routes>
            <Route path="/" element={<TodoItem />} />
            <Route path="/todoInput" element={<TodoInput />} />
            <Route path="/todoList" element={<TodoList />} />
            <Route path="/filter" element={<Filter />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
