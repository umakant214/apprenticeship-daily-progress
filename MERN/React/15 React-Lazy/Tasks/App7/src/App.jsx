import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Profile = lazy(() => import("./components/Profile"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const PostList = lazy(() => import("./components/PostList"));
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <div>Loading..</div>
            </>
          }
        >
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/postList" element={<PostList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
