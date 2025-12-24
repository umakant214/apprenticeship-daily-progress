import React from "react";

const Blog = () => {
  return (
    <>
      {/* Our Recent Blog */}
      <div className="row mt-5">
        <h1 className="mb-4 px-4">Our Recent Blog</h1>
      </div>
      <div className="row px-4" style={{ marginBottom: "150px" }}>
        <div className="col-sm-4 mb-3">
          <div className="card border-0 shadow-sm">
            <img src="/post-thumb-1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Top 10 casual look ideas to dress up your kids
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit
                neque dolor morbi...
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4 mb-3">
          <div className="card border-0 shadow-sm">
            <img src="/post-thumb-2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Top 10 casual look ideas to dress up your kids
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit
                neque dolor morbi...
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4 mb-3">
          <div className="card border-0 shadow-sm">
            <img src="/post-thumb-3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Top 10 casual look ideas to dress up your kids
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit
                neque dolor morbi...
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Recent Blog */}
    </>
  );
};

export default Blog;
