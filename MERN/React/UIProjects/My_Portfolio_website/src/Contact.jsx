function Contact() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-sm-10 mx-auto">
          <div className="row gap-5 p-4">
            <div className="col-sm-4 shadow-lg rounded-4 p-4">
              <h4>Contact Information</h4>
              <div className="row">
                <div className="col-2 text-center p-3 rounded-5 bg-color mb-2">
                  <i className="fa-solid fa-envelope fs-4 first-color"></i>
                </div>
                <div className="col-10">
                  <span className="fw-bold">Email</span> <br />
                  <span>umakant@gmail.conm</span>
                </div>

                <div className="col-2 text-center p-3 mb-2 rounded-5 bg-color">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="col-10">
                  <span className="fw-bold">Phone</span> <br />
                  <span>+918081727385</span>
                </div>

                <div className="col-2 text-center p-3 mb-2 rounded-5 bg-color mb-3">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="col-10">
                  <span className="fw-bold">Location</span> <br />
                  <span>Lucknow</span>
                </div>

                <hr />

                <div className="col-10">
                  <span className="fw-bold d-block">Connect with me</span>{" "}
                  <br />
                  <span>
                    <a href="#" style={{ color: "var(--ftextcolor)" }}>
                      <i className="fa-brands fa-github fs-2"></i>
                    </a>
                    <a href="#" style={{ color: " var(--ftextcolor)" }}>
                      <i className="fa-brands fa-linkedin fs-2 ms-3"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-7 shadow-lg rounded-4 p-4">
              <h3 className="mb-3">Send me a message</h3>
              <form className="row g-3">
                <div className="col-sm-6">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-sm-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <br />
                  <textarea
                    placeholder="Message"
                    style={{ resize: "none", height: "120px" }}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-sm-12">
                  <button
                    className="btn btn-outline-primary bg1-color text-light"
                    style={{ height: "50px" }}
                  >
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
