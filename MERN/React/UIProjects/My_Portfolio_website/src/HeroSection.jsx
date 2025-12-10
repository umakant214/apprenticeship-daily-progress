function HeroSection() {
  return (
    <>
      <div
        className="row"
        id="home"
        style={{ background: " var(--bgcolor)", marginTop: " 60px" }}
      >
        <div className="col-sm-11 mx-auto py-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-5 text-center text-md-start">
              <h1 className="fw-bold mb-3">
                <span style={{ color: "var(--textcolor)" }}>Hi, I'm</span>
                <span style={{ color: "var(--ftextcolor)" }}>
                  Umakant Yadav
                </span>
              </h1>
              <h3 className="mb-3" style={{ color: "var(--ftextcolor)" }}>
                MERN STACK DEVELOPER
              </h3>
              <p className="fs-5 mb-5">
                Passionate developer with 1 year of experience creating
                responsive and user-friendly web applications using MERN stack
                technologies.
              </p>
              <button className="btn btn-primary text-light rounded-5 btn1 px-3 fw-bold">
                <i className="fa-solid fa-envelope"></i>
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Me
                </a>
              </button>
              <button
                className="btn text-light rounded-5 btn1 px-3 fw-bold ms-3"
                style={{ backgroundColor: "var(--textcolor)" }}
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <a
                  href="#project"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  View Projects
                </a>
              </button>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src="images/umakant.jpeg"
                className="rounded-circle img-fluid border border-3 border-light"
                alt="Profile Image"
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row bg-color">
        <div className="col-6 text-center mx-auto">
          <i className="fa-solid fa-angle-down fs-1 fa-bounce"></i>
        </div>
      </div>
    </>
  );
}
export default HeroSection;
