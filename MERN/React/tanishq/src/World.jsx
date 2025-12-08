function World() {
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto text-center p-4">
          <h2 className="text-color">Tanishq World</h2>
          <hr className="mx-auto w-50" />
          <p style={{ color: "gray" }}>A companion for every occasion</p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-11 mx-auto">
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div className="card">
                <img
                  src="images/world.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <img
                  src="images/world1.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-11 mx-auto">
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div className="card">
                <img
                  src="images/world3.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mt-2">
                <img
                  src="images/world3.webp"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 dis">
        <div className="col-sm-12">
          <img
            src="images/slider3.webp"
            height="100%"
            width="100%"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div
          className="col-sm-10 mx-auto bg-light"
          style={{ transform: "translateY(-100px)" }}
        >
          <div className="row">
            <div className="col-sm-6 pt-3 px-3">
              <img
                src="images/tranding4.webp"
                alt=""
                className="img-fluid"
                height="100%"
              />
            </div>
            <div className="col-sm-6 pt-3 px-3">
              <img
                className="img-fluid"
                src="images/tranding5.webp"
                alt=""
                height="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default World;
