import { LuSend } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="row aboutbgColor py-5">
        <div className="col-10 mx-auto">
          <div className="row py-5">
            <div className="col-6 mx-auto">
              <h1 className="text-center smHeading">Get in touch</h1>
              <p className="featuresPara text-center">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="row mb-1">
                <div className="col-sm-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text" id="visible-addon">
                      <CiUser className="fs-5" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="visible-addon"
                    />
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text" id="visible-addon">
                      <MdOutlineMailOutline className="fs-5" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Username"
                      aria-describedby="visible-addon"
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-sm-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text" id="visible-addon">
                      <IoMdCall />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Number"
                      aria-label="Username"
                      aria-describedby="visible-addon"
                    />
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="input-group">
                    <span className="input-group-text" id="visible-addon">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      aria-label="Username"
                      aria-describedby="visible-addon"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-1">
                <div class="input-group ">
                  <span class="input-group-text">
                    <FiMessageSquare />
                  </span>
                  <textarea
                    class="form-control textarea"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>

              <div className="row mt-5 mb-5">
                <div className="col-6  mt-5 mb-5">
                  <button className="btn btnbgcolor px-4 py-3 rounded-3">
                    <LuSend className="me-2" />
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card mb-3 p-1 border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <FaPhoneAlt className=" iconbgColor" />
                    </div>
                    <div className="col-9 featuresPara">
                      <p className="m-0 p-0 mt-1  ">0045939863784</p>
                      <p> +004389478327</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 p-1 border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <CiLocationOn className=" iconbgColor" />
                    </div>
                    <div className="col-9 featuresPara">
                      <p className="m-0 p-0 mt-1  ">0045939863784</p>
                      <p> +004389478327</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 p-1 border-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <FaPhoneAlt className=" iconbgColor" />
                    </div>
                    <div className="col-9 featuresPara">
                      <p className="m-0 p-0 mt-1  ">0045939863784</p>
                      <p> +004389478327</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
