import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="row bgcolor">
          <div className="col-sm-10 mx-auto p-5 ">
            <div className="row mb-3">
              <div className="col-sm-4 text-center">
                <h4 className="text-light mb-3 text-center fontFamily">
                  Contact Us
                </h4>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {" "}
                    <a href="#" className="text-light text-decoration-none">
                      <CiLocationOn /> Location
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-light text-decoration-none">
                      <IoMdCall /> Call +918082837447
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-light text-decoration-none">
                      <MdEmail /> demo@gmail.com
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 text-center text-light">
                <h4 className="mb-3 text-center text-light fontFamily">
                  Feane
                </h4>
                <ul style={{ listStyle: "none" }}>
                  <p className="text-light text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    minima ex autem velit nihil quod beatae vitae itaque vel.
                    Molestiae cupiditate exercitationem.
                  </p>
                  <FaFacebook className="text-light fs-4 me-3" />
                  <FaTwitter className="fs-4 me-3" />
                  <FaLinkedin className="fs-4 me-3" />
                  <FaSquareInstagram className="fs-4 me-3" />
                  <FaYoutube className="fs-4 me-3" />
                </ul>
              </div>
              <div className="col-sm-4 text-light text-center">
                <h4 className="text-light text-center mb-3 fontFamily">
                  Opening Hours
                </h4>
                <p>EveryDay</p>
                <p>10.00 Am -10.00 Pm</p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12 text-center text-light">
                © 2025 All Rights Reserved By Free Html Templates
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center text-light">
                © Distributed By ThemeWagon
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
