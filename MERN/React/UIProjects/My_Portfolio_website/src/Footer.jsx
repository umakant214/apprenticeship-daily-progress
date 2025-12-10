function Footer() {
  return (
    <>
      <div className="row bg1-color text-center text-sm-start pt-4">
        <div className="col-sm-11 mx-auto">
          <div className="row text-light">
            <div className="col-sm-6 p-3">
              <span className="fw-bold fs-3">
                <b className="fw-bold">Umakant </b>Yadav
              </span>
              <br />
              <p>
                MERN stack developer with a passion for creating beautiful,
                responsive, and user-friendly web applications.
              </p>
              <i className="fa-brands fa-linkedin fs-2"></i>
              <i className="fa-brands fa-github fs-2"></i>
            </div>
            <div className="col-sm-3 p-3">
              <h4 className="ms-3">Quick Links</h4>
              <ul style={{ listStyle: "none" }}>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-sm-3 p-3">
              <h4>Contact Info</h4>
              <p>Lucknow, Uttar Pradesh, India</p>
              <p>
                <a
                  className="text-light"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  umakantweb80@gmail.com
                </a>
              </p>
              <p>+918081727385</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row bg1-color pt-5">
        <hr className="text-light w-75 mx-auto" />
        <div className="col-sm-8 mx-auto text-center text-light">
          <p>&copy; 2025 Umakant Yadav. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
