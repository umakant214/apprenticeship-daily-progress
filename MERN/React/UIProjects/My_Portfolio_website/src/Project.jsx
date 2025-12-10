function Project() {
  return (
    <>
      <div className="row">
        <div className="col-sm-11 mx-auto">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
              <div className="card">
                <img
                  src="images/Project1.jpeg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Tanishq</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <a
                    href="https://tanishq-kohl.vercel.app/"
                    className="btn btn-primary float-end"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
              <div className="card">
                <img
                  src="images/Project2.jpeg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Myntra</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <a
                    href="https://myntra-app-seven.vercel.app/"
                    className="btn btn-primary float-end"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
              <div className="card">
                <img
                  src="images/Project3.jpeg"
                  className="card-img-top img-thumbnail"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Restaurant</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card’s content.
                  </p>
                  <a
                    href="https://buy-now-blush.vercel.app/"
                    className="btn btn-primary float-end"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3 mt-5" id="experience">
        <div class="col-sm-8 mx-auto text-center">
          <h2 class="first-color fw-bold">Work Experience</h2>
          <hr class="w-50 mx-auto line mb-3" />
          <p>My Professional Journey as a MERN stack developer</p>
        </div>
      </div>
    </>
  );
}
export default Project;
