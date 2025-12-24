import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaAmazon } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="row px-3 py-5" style={{ marginTop: "200px" }}>
        <div className="col-sm-3">
          <img
            src="/logo.png"
            className="img-fluid mb-3"
            alt="Logo"
            style={{ maxWidth: "160px" }}
          />
          <div className="d-flex gap-3">
            <BiLogoFacebook className="fs-4 social-icon" />
            <CiTwitter className="fs-4 social-icon" />
            <FaYoutube className="fs-4 social-icon" />
            <IoLogoInstagram className="fs-4 social-icon" />
            <FaAmazon className="fs-4 social-icon" />
          </div>
        </div>
        <div className="col-sm-2">
          <h5>Ultras</h5>
          <ul className="list-unstyled">
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Affiliate Programme
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Ultra press
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-2">
          <h5>Customer Service</h5>
          <ul className="list-unstyled">
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Return Refund
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Cokkies Guidences
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Delevery Information
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-2">
          <h5>Customer Service</h5>
          <ul className="list-unstyled">
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Return Refund
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Cokkies Guidences
              </a>
            </li>
            <li>
              <a
                href="#"
                className="d-flex text-secondary text-decoration-none"
              >
                Delevery Information
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>Subscribe Us</h5>
          <p>Subscribe to our newsletter to get</p>
          <p>updates about our grand offers</p>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
            />
            <button className="btn btn-dark">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
