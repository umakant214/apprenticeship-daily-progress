import React, { useState } from "react";

const Task5 = () => {
  let [CustomerName, setCustomerName] = useState("");
  let [OrderNumber, setOrderNumber] = useState("");
  let [OrderDate, setOrderDate] = useState("");
  let [PaymentMode, setPaymentMode] = useState("");

  const submit = () => {
    console.log(CustomerName, OrderNumber, OrderDate, PaymentMode);
  };
  return (
    <>
      <form action="">
        <div className="row  p-5">
          <div className="col-sm-4 mx-auto bg-light p-4 rounded-1">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="fa-solid fa-lock fa-bounce" />
                  SIGNUP
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <hr />
              <div className="row">
                <div className="col ">
                  <label htmlFor="name" className="form-label fw-bold">
                    Customer Name
                  </label>
                  <div className=" mb-3">
                    <input
                      onChange={(e) => setCustomerName(() => e.target.value)}
                      type="text"
                      required=""
                      className="form-control"
                      id="floatingInputGroup1"
                      placeholder="CustomerName"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <label htmlFor="name" className="form-label fw-bold">
                    Order Number
                  </label>
                  <div className=" mb-3">
                    <input
                      onChange={(e) => setOrderNumber(() => e.target.value)}
                      type="number"
                      required=""
                      className="form-control"
                      id="floatingInputGroup1"
                      placeholder="OrderNumber"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <label htmlFor="name" className="form-label fw-bold">
                    Order Date
                  </label>
                  <div className=" mb-3">
                    <input
                      onChange={(e) => setOrderDate(() => e.target.value)}
                      type="text"
                      required=""
                      className="form-control"
                      id="floatingInputGroup1"
                      placeholder="OrderDate"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <label htmlFor="name" className="form-label fw-bold">
                    Payment Mode
                  </label>
                  <div className="input-group mb-3">
                    <input
                      onChange={(e) => setPaymentMode(() => e.target.value)}
                      type="text"
                      className="form-control"
                      id="floatingInputGroup1"
                      required=""
                      placeholder="PaymentMode"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3" />
                <div className="col-3" />
                <div className="col-3">
                  <button className="btn btn-secondary ">CANCEL</button>
                </div>
                <div className="col-3">
                  <input
                    onClick={submit}
                    type="submit"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Task5;
