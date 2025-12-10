function Remind() {
  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-center mb-5">
            <b>Just to remind you </b>
            <b className="text-color">we have Best options for you</b>
          </h2>

          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-8">
                  <div className="card">
                    <img
                      src="images/remind1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="card mb-2">
                    <img
                      src="images/lahanga.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <img
                      src="images/lahanga.jpg"
                      className="card-img-top mt-2"
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
            class="p-2 px-3 bg1-color border-0"
          />
        </div>
      </div>
    </>
  );
}
export default Remind;
