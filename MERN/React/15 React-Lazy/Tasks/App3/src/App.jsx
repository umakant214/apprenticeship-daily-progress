import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const PostList = lazy(() => import("./components/PostList"));
const PostCard = lazy(() => import("./components/PostCard"));
const PostDetails = lazy(() => import("./components/PostDetails"));
const AuthorInfo = lazy(() => import("./components/AuthorInfo"));
const Comments = lazy(() => import("./components/Comments"));
import { Oval } from "react-loader-spinner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          }
        >
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/postCard" element={<PostCard />} />
            <Route path="/postDetails" element={<PostDetails />} />
            <Route path="/authorInfo" element={<AuthorInfo />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
