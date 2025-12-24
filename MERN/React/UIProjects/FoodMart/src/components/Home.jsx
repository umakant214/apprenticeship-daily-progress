import React from "react";

const Home = () => {
  return (
    <div className="row px-3  mb-4">
      <div className="col-sm-6 pt-5 bg-color p-5 py-5 rounded-4">
        <div className="row pt-5">
          <div className="col-7">
            <div className="natural">100% natural</div>
            <h1 className="heroHeading">Fresh Smoothie & Summer Juice</h1>
            <p className="paraColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              quisquam eaque rerum hic animi, odit harum cumque earum molestias
              molestiae.
            </p>
            <button className="btn btn-outline-dark px-4 py-3">SHOP NOW</button>
          </div>
          <div className="col-5">
            <img src="/product-thumb-1.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <div className="col-sm-6 ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <img
                src="/shop_collection.png"
                style={{ height: "260px" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="row mt-3">
              <img
                src="/shop_collection.png"
                style={{ height: "260px" }}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
