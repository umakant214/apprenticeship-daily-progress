function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row shadow-lg" style={{ background: "var(--bgcolor)" }}>
          <div className="col-sm-11 col-md-11 col-lg-11 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-3" href="#">
                  <span style={{ color: "var(--textcolor)" }}>Umakant</span>
                  <span style={{ color: "var(--ftextcolor)" }}>Yadav</span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item ms-3">
                      <a className="nav-link active" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link" href="#">
                        About us
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link" href="#skill">
                        Skills
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link" href="#experience">
                        Experience
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link" href="#project">
                        Projects
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link" href="#contact">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
