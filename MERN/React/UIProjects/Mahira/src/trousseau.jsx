function Trousseau() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-5">
            <b>Create your </b> <b className="text-color"> trousseau box</b>
          </h2>
          <img src="images/box1.jpg" className="img-fluid" alt="" />
          <div className="row mt-4">
            <div className="col-8 mx-auto">
              <div className="row">
                <div className="col-4">
                  <div className="card border-0 mb-4">
                    <img
                      src="images/box3.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 mb-4">
                    <img
                      src="images/box3.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0 mb-4">
                    <img
                      src="images/box3.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <input
            type="button"
            value="Explore More"
            className="p-2 px-3 bg1-color border-0"
          />
        </div>
      </div>
    </>
  );
}
export default Trousseau;
