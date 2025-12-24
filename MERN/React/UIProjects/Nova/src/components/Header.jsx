import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <div className="row navcolor py-2 ">
      <div className="col-sm-10 mx-auto">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="/logo.svg" alt="" />
            </a>
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-4">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/feature">
                    Feature
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link className="nav-link me-4" to="/">
                <BsCart2 className="fs-5" />
              </Link>
              <Link className="nav-link me-4" to="/">
                <IoMdNotificationsOutline className="fs-5" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
