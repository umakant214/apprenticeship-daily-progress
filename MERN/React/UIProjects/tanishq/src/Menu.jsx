function Menu() {
  return (
    <>
      <div className="container-fluid">
        <div className="row menu" style={{ backgroundColor: "white" }}>
          <div className="col-sm-10 mx-auto ">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
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
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        {" "}
                        <img
                          src="images/all-jewellery-l1.svg"
                          height="20px"
                          alt=""
                        />{" "}
                        All Jewellery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <img src="images/gold-l1.svg" height="20px" alt="" />{" "}
                        Gold
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        {" "}
                        <img src="images/diamond-l1.svg" height="20px" alt="" />
                        Diamond
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link ">
                        <img
                          src="images/earrings-l1.svg"
                          height="20px"
                          alt=""
                        />{" "}
                        Earrings{" "}
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link ">
                        <img src="images/rings-l1.svg" height="20px" alt="" />{" "}
                        Rings{" "}
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link ">
                        {" "}
                        <img
                          src="images/dailywear-l1.svg"
                          height="20px"
                          alt=""
                        />
                        Daily Wea{" "}
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link ">
                        <img
                          src="images/collection-l1.svg"
                          height="20px"
                          alt=""
                        />{" "}
                        Collection{" "}
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link ">
                        {" "}
                        <img src="images/wedding-l1.svg" height="20px" alt="" />
                        Wedding{" "}
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link ">
                        {" "}
                        <img src="images/gifting-l1.svg" height="20px" alt="" />
                        Gifting{" "}
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a className="nav-link ">
                        <img src="images/more-l1.svg" height="20px" alt="" />
                        More{" "}
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
export default Menu;
