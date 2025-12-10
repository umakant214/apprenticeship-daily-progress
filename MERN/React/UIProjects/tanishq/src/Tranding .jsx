function Tranding() {
  return (
    <>
      <div className="col-sm-4 mx-auto  text-center p-4">
        <h2 className="text-color">Trending Now</h2>
        <hr className="mx-auto w-50" />
        <p style={{ color: "gray" }}>
          Jewellery pieces everyone’s eyeing right now
        </p>
      </div>

      <div className="row ">
        <div className="col-sm-11 mx-auto ">
          <div className="row">
            <div className="col-sm-4 mb-3">
              <div className="card border-0">
                <img
                  src="images/tranding1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase">
                    Auspicious Occasion
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card border-0">
                <img
                  src="images/tranding2.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase">
                    Giftings Jewellery
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card border-0">
                <img
                  src="images/tranding3.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase">
                    Drops of Radiance
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tranding;
