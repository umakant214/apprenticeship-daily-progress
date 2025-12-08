function Navbar() {
  return (
    <>
      <div classNameName="container-fluid">
        <div className="row bg-light p-2 " style={{ backgroundColor: "white" }}>
          <div className="col-sm-3 text-color  fs-4">
            <img src="images/logo.svg" height="50px" alt="" />
          </div>
          <div className="col-sm-5 ">
            <nav className="navbar bg-body-tertiary">
              <form className="input-group" role="search">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
            </nav>
          </div>
          <div className="col-sm-4 pt-3 ps-5 ">
            <i className="fa-brands fa-whatsapp fs-3 ms-1 text-color "></i>
            <i className="fa-brands fa-facebook fs-3 ms-1 text-color"></i>
            <i className="fa-brands fa-twitter fs-3 ms-1 text-color"></i>
            <i className="fa-brands fa-instagram fs-3 ms-1 text-color"></i>
            <i className="fa-brands fa-gratipay fs-3 ms-1 text-color"></i>
            <i className="fa-brands fa-shopify fs-3 ms-1 text-color"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
