import React from "react";

const Category = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-12 px-4 d-flex align-items-center">
          <span className="fs-2 fw-semibold">Category</span>
          <span className="ms-auto fs-5">View All Categories →</span>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-3">
          <div className="card p-5 border-0 shadow-sm">
            <img
              src="/icon-vegetables-broccoli.png"
              className="card-img-top img-fluid ms-auto me-auto"
              style={{ height: "30px", width: "30px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fs-4">Fruits & Veges</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card p-5 border-0 shadow-sm">
            <img
              src="/icon-bread-baguette.png"
              className="card-img-top img-fluid ms-auto me-auto"
              style={{ height: "30px", width: "30px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fs-4">Fruits & Veges</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card p-5 border-0 shadow-sm">
            <img
              src="/icon-wine-glass-bottle.png"
              className="card-img-top img-fluid ms-auto me-auto"
              style={{ height: "30px", width: "30px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fs-4">Fruits & Veges</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card p-5 border-0 shadow-sm">
            <img
              src="/icon-vegetables-broccoli.png"
              className="card-img-top img-fluid ms-auto me-auto"
              style={{ height: "30px", width: "30px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fs-4">Fruits & Veges</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Newly Arrived Brands */}
      <div className="row px-4 mt-5">
        <h2 className="mb-5">Newly Arrived Brands</h2>
        <div className="col-sm-4">
          <div class="card text-secondary shadow-lg p-2 border-0">
            <div class="card-body">
              <div className="row">
                <div className="col-5 ">
                  <img
                    src="/product-thumb-11.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-7">
                  <h5>Amber Jar</h5>
                  <h4>Honey Best nectar you wish to get</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card shadow-lg p-2 border-0">
            <div class="card-body">
              <div className="row">
                <div className="col-5 ">
                  <img
                    src="/product-thumb-12.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-7">
                  <h5>Amber Jar</h5>
                  <h4>Honey Best nectar you wish to get</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4 ">
          <div class="card shadow-lg p-2 border-0">
            <div class="card-body">
              <div className="row">
                <div className="col-5 ">
                  <img
                    src="/product-thumb-13.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-7">
                  <h5>Amber Jar</h5>
                  <h4>Honey Best nectar you wish to get</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Newly Arrived Brands */}
    </>
  );
};

export default Category;
