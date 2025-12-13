import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row">
        <nav className="navbar navbar-expand-lg p-2 py-3 ">
          <div className="container-fluid">
            <Link className="navbar-brand logo" to="/">
              Launch
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark ms-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active ms-3"
                    aria-current="page"
                    to="/features"
                  >
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active ms-3"
                    aria-current="page"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active ms-3"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active ms-3"
                    aria-current="page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  className="btn bg-light border border-1 me-3 "
                  type="submit"
                >
                  Sign in
                </button>
                <button className="btn bgcolor text-light" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
