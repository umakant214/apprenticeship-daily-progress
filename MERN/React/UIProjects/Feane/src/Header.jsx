import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="container-fluid bgcolor  ">
        <div className="row px-5 p-2">
          <div className="col-sm-12 ">
            <nav className="navbar navbar-expand-lg  ">
              <div className="container-fluid ">
                <a className="navbar-brand fs-4 text-light" href="#">
                  Feane
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse text-light"
                  id="navbarNav"
                >
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link active text-warning me-4 "
                        href="#"
                      >
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light me-4" href="#">
                        MENU
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light me-4" href="#">
                        ABOUT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light me-4" href="#">
                        BOOK TABLE
                      </a>
                    </li>
                  </ul>
                  <FaUser className="fs-5 me-3" />
                  <FaShoppingCart className="fs-5 me-3" />
                  <FaSearch className="fs-5 me-3" />
                  <button className="btn btn-warning text-light rounded-5 px-4">
                    Oder Online
                  </button>
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
