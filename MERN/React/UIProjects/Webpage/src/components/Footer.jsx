import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mb-4">
            <h6 className="fw-bold">About Launch.</h6>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <p className="fw-semibold">Connect</p>
            <div className="fs-2">
              <a href="#" className="text-dark me-3" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-dark me-3" aria-label="Instagram">
                <FaInstagramSquare />
              </a>
              <a href="#" className="text-dark me-3" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark me-3" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="text-dark" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 col-6 mb-4">
                <h6 className="pb-3 fw-bold">Projects</h6>
                <a href="#" className="text-decoration-none text-dark d-block">
                  La Lega Stadium
                </a>
                <a href="#" className="text-decoration-none text-dark d-block">
                  France Building
                </a>
                <a href="#" className="text-decoration-none text-dark d-block">
                  22 New Homes
                </a>
                <a href="#" className="text-decoration-none text-dark d-block">
                  Manage Center
                </a>
                <a href="#" className="text-decoration-none text-dark d-block">
                  Sports Hall
                </a>
              </div>

              <div className="col-md-4 col-6 mb-4">
                <h6 className="pb-3 fw-bold">Services</h6>
                <a href="#" className="text-decoration-none text-dark d-block">
                  Architect
                </a>
                <a href="#" className="text-decoration-none text-dark d-block">
                  Interior Design
                </a>
                <a href="#" className="text-decoration-none text-dark d-block">
                  Landscape Design
                </a>
                <a href="#" className="text-decoration-none text-dark d-block">
                  Consultancy
                </a>
              </div>

              <div className="col-md-4 col-6 mb-4">
                <h6 className="pb-3 fw-bold">Contact</h6>
                <a href="#" className="text-decoration-none text-dark d-block">
                  43 Raymouth Rd. Baltemoer, London 3910
                </a>
                <a
                  href="tel:+918083673737"
                  className="text-decoration-none text-dark d-block"
                >
                  +91 80836 73737
                </a>
                <a
                  href="tel:+918377328892"
                  className="text-decoration-none text-dark d-block"
                >
                  +91 83773 28892
                </a>
                <a
                  href="mailto:umakant@gmail.com"
                  className="text-decoration-none text-dark d-block"
                >
                  umakant@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-5 mb-0">
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <FaHeart className="text-danger mx-1" />
          Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
