import {} from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="row py-5">
        <div className="col-10 mx-auto">
          <img src="/brands.svg" className="img-fluid py-5" alt="" />
        </div>
      </div>

      <div className="row aboutbgColor py-5">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-sm-4 px-5 mb-3">
              <h1 className="mb-4">
                <img src="/logo.svg" className="img-fluids mb-4" alt="" />
                <p className="featuresPara mb-4 pt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisis nulla placerat amet amet congue.
                </p>
                <p>
                  <FaFacebook className="me-3" />
                  <FaSquareInstagram className="me-3" />
                  <FaTwitter className="me-3" />
                  <FaLinkedin className="me-3" />
                </p>
              </h1>
            </div>
            <div className="col-sm-2  mb-3">
              <h5 className="mb-5">Quick Link</h5>
              <ul className=" list-unstyled">
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3  mb-3">
              <h5 className="mb-5">Services</h5>
              <ul className=" list-unstyled">
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 fw-medium text-secondary"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 fw-medium text-secondary"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 fw-medium text-secondary"
                  >
                    Seo Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 fw-medium text-secondary"
                  >
                    Blog Writing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-3  mb-3">
              <h5 className="mb-5">Services</h5>
              <ul className=" list-unstyled ">
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium "
                  >
                    Seo Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-secondary fw-medium "
                  >
                    Blog Writing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
