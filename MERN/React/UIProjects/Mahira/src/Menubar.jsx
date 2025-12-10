function Menubar() {
  return (
    <>
      <div className="row">
        <div className="col-11 mx-auto">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="images/logo.png"
                  alt="Bootstrap"
                  width="195"
                  height=" 116"
                />
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
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse ms-5"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      New
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Formals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Occasion</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">About Us</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-5 text-color text"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <i className="fa-brands fa-whatsapp fs-4 text-color"></i>
                <i className="fa-regular fa-heart fs-4 text-color"></i>
                <i className="fa-solid fa-user fs-4 text-color"></i>
                <i className="fa-solid fa-bag-shopping fs-4 text-color"></i>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Menubar;
