function Footer() {
  return (
    <>
      <div
        className="text-light"
        style={{ backgroundColor: "#300708", listStyle: "none" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center mb-4">
            <div className="col-auto">
              <img
                src="images/footer.svg"
                alt=""
                style={{ height: "80px", width: "200px" }}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12 col-lg-3 mb-4">
              <h4 className="text-light mb-3">Download the Tanishq App Now</h4>
              <div className="d-flex justify-content-center justify-content-md-start">
                <img
                  src="images/qrcode.svg"
                  alt="QR Code"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
            </div>

            <div className="col-12 col-lg-3 mb-4">
              <h4 className="text-light mb-3">Useful Links</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    International Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Track your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Find a Store
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <h4 className="text-light mb-3">Information</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Offers & Contest Details
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Help & FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    About Tanishq
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-3 mb-4">
              <h4 className="text-light mb-3">Contact Us</h4>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    1800-266-0123
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Chat With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    +91 22343345443
                  </a>
                </li>
              </ul>
              <hr className="bg-light w-75 mx-auto mx-md-0" />
              <div className="d-flex justify-content-center justify-content-start gap-3 mt-3">
                <i className="fa-brands fa-whatsapp fs-3"></i>
                <i className="fa-solid fa-envelope fs-3"></i>
                <i className="fa-solid fa-inbox fs-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
