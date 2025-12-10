function Footer() {
  return (
    <>
      <div
        className="row justify-content-evenly pt-5 pb-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="col-md-1 col-6">
          <h4 className="text-light pb-3">Info</h4>
          <p>
            <a href="#" className="text-decoration-none text-light">
              Formats
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Compression
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Pricing
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              FAQ
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Status
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Policy
            </a>
            <br />
          </p>
        </div>
        <div className="col-md-2 col-6">
          <h4 className="text-light pb-3">Getting Started</h4>
          <p>
            <a href="#" className="text-decoration-none text-light">
              Introduction
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Themes
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Documentation
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Usages
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Elements
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Global
            </a>
            <br />
          </p>
        </div>
        <div className="col-md-1 col-6">
          <h4 className="text-light pb-3">Resources</h4>
          <p>
            <a href="#" className="text-decoration-none text-light">
              API
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Form Validation
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Accessibility
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Marktplace
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Visibility
            </a>
            <br />
            <a href="#" className="text-decoration-none text-light">
              Community
            </a>
            <br />
          </p>
        </div>
        <div className="col-md-4 col-6">
          <h4 className="text-light pb-3">Newsletter</h4>
          <p className="text-light">
            Subscribe to our Newsletter for a weekly dose of news, updates
            ,helpful tips,and exclusive offers.
          </p>
          <form action="">
            <div className="mb-3">
              <div className="d-flex mb-4">
                <input
                  style={{
                    maxWidth: "200px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  type="text"
                  className="form-control text-light"
                  id="email"
                  placeholder="Your email"
                />
                <button type="button" className="btn btn-outline-light ms-3">
                  SUBSCRIBE
                </button>
              </div>

              <i
                className="bi bi-facebook fs-4 m-2 m-sm-3"
                style={{ color: " #d8d8d8" }}
              ></i>
              <i
                className="bi bi-twitter fs-4 m-2 m-sm-3"
                style={{ color: "#d8d8d8" }}
              ></i>
              <i
                className="bi bi-instagram fs-4 m-2 m-sm-3"
                style={{ color: " #d8d8d8" }}
              ></i>
              <i
                className="bi bi-linkedin fs-4 m-2 m-sm-3"
                style={{ color: " #d8d8d8" }}
              ></i>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Footer;
