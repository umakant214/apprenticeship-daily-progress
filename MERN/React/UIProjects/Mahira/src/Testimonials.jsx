function Testimonials() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-11 mx-auto">
          <h2 className="text-center mb-5">
            <b>Testimonials </b>
          </h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <img
                src="images/test.png"
                className="img-fluid shadow-lg"
                alt=""
              />
            </div>
            <div className="col-sm-6 p-lg-5 mt-lg-5">
              <div
                className="card p-lg-3 mt-lg-5 border-0"
                style={{ marginTop: "100px" }}
              >
                <div className="card-body p-lg-5 bg2-color rounded-4 p-4">
                  <h5 className="card-title text-center">
                    “I highly recommend their products”
                  </h5>
                  <p className="card-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
