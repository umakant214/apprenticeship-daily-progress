import React from "react";

const Phone = () => {
  return (
    <>
      <div className="row px-3 mt-5 phone py-5">
        <div className="col-sm-11 mx-auto">
          <div className="row">
            <div className="col-sm-5 ">
              <img
                src="/phone.png"
                className="img-fluid position-absolute"
                style={{ top: "3830px" }}
                alt=""
              />
            </div>
            <div className="col-sm-7 py-5">
              <h1>Shop faster with foodmart App</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem
                posuere sit iaculis amet, ac urna. Adipiscing fames semper erat
                ac in suspendisse iaculis. Amet blandit tortor praesent ante
                vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus
                liberolectus non et psryroin.
              </p>
              <span>
                <img src="/app-store.jpg" alt="" />
              </span>
              <span>
                <img src="/google-play.jpg" className="ms-5" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
