import React from "react";

const Navbar = () => {
  return (
    <div className="row py-4">
      <div className="col-sm-12">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <li className=" navbar-brand dropdown list-unstyled">
              <a
                className="nav-link  dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop by Departments
              </a>
              <ul className="dropdown-menu  ">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-5" style={{ fontSize: "16.5px" }}>
                <li className="nav-item me-3">
                  <a className="nav-link active" aria-current="page" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    Kids
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    Accessories
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    Pages
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    Brand
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    Sale
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
