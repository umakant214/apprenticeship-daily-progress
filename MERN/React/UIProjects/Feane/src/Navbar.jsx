import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 top">
            <div className="row">
              <div className="col-sm-11 mx-auto px-4 pt-2">
                <nav className="navbar navbar-expand-lg  ">
                  <div className="container-fluid ">
                    <a
                      className="navbar-brand fs-2 text-light fontFamily "
                      href="#"
                    >
                      Feane
                    </a>

                    <button
                      className="navbar-toggler text-light"
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
                          <a
                            className="nav-link text-light me-4"
                            href="#menuSection"
                          >
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
                      <button className="btn btn-warning text-light rounded-5 px-5 py-2">
                        Oder Online
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            <div className="  row box">
              <div className="col-sm-6">
                <h1 className="size fontFamily">Fast Food Restaurant</h1>
                <p className="mt-4 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur libero debitis consequatur quam, placeat, ullam
                  dolorem praesentium est illo maiores, quasi ut ad. Ratione
                  iure optio reiciendis esse praesentium alias.
                </p>
                <button className="btn btn-warning text-light px-5 py-2 rounded-5">
                  Order Now
                </button>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
