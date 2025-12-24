import React from "react";

const Pricing = () => {
  return (
    <>
      <div className="row pricingBgColor">
        <div className="col-sm-10 mx-auto">
          <div className="row py-5 plan ">
            <div className="col-sm-6">
              <h1 className="smHeading mb-4">Pricing Plan</h1>
              <p className="featuresPara">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!Stop wasting time
                and money designing and managing a website that doesn’t get
                results. Happiness guaranteed! slide 6 to 7 of 3
              </p>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm p-4">
                    <div className="card-body">
                      <h6 className="card-subtitle fw-bold text-center mb-2 text-body-secondary">
                        Basic Design
                      </h6>
                      <h5 className="card-title">Web Design</h5>
                      <h1 className="card-title fs-1 dollorColor">$ 29.00</h1>
                      <p className="card-text text-center">
                        Carefully crafted components
                      </p>
                      <p className="card-text text-center">
                        Amazing page examples
                      </p>
                      <p className="card-text text-center">
                        Super friendly support team
                      </p>
                      <p className="card-text text-center">Awesome Support</p>
                      <button className="btn ms-4 btnbgcolor text-center mx-auto">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm p-4">
                    <div className="card-body">
                      <h6 className="card-subtitle fw-bold text-center mb-2 text-body-secondary">
                        Standard Design
                      </h6>
                      <h5 className="card-title">Develop</h5>
                      <h1 className="card-title fs-1 dollorColor">$ 89.00</h1>
                      <p className="card-text text-center">
                        Carefully crafted components
                      </p>
                      <p className="card-text text-center">
                        Amazing page examples
                      </p>
                      <p className="card-text text-center">
                        Super friendly support team
                      </p>
                      <p className="card-text text-center">Awesome Support</p>
                      <button className="btn ms-4 btnbgcolor text-center mx-auto">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
