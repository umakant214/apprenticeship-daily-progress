import { MdOutlineDone } from "react-icons/md";
import { PiNotification } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import { AiTwotoneMail } from "react-icons/ai";
import { MdTv } from "react-icons/md";
const Features = () => {
  return (
    <>
      <div className="row mb-4 pt-5 p-2">
        <div className="col-sm-5 p-4 mb-3">
          <span
            style={{ fontSize: "15px", fontWeight: "500" }}
            className="text-color text-uppercase"
          >
            Digital Services
          </span>
          <h3 style={{ fontSize: "43px" }}>Selling Digital Services</h3>
          <p className="paracolor">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast
          </p>
          <p className="paracolor">
            <MdOutlineDone className="fs-5 me-2 text-color" />
            There live the blind texts
          </p>
          <p className="paracolor">
            {" "}
            <MdOutlineDone className="fs-5 me-2 text-color" /> Far far away
            behind the word
          </p>
          <p
            style={{
              fontWeight: "500",
              fontStyle: "italic",
              fontSize: "16.3px",
            }}
          >
            “Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia. ”
          </p>
        </div>
        <div className="col-sm-7 mb-3">
          <img src="/dashboard.webp" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-7 mb-3">
          <img src="/dashboard.webp" className="img-fluid" alt="" />
        </div>
        <div className="col-sm-5 mb-3">
          <div class="card mb-2 p-1 border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-2">
                  <PiNotification className="icon icon1" />
                </div>
                <div className="col-10 ">
                  <p className="grow">Grow Your Business</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-2 p-1 border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-2">
                  <TfiReload className="icon icon2" />
                </div>
                <div className="col-10 ">
                  <p className="grow">Product Build</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-2 p-1 border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-2">
                  <AiTwotoneMail className="icon icon3" />
                </div>
                <div className="col-10 ">
                  <p className="grow">Success Every Day</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-2 p-1 border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-2">
                  <MdTv className="icon icon4" />
                </div>
                <div className="col-10 ">
                  <p className="grow">Bring Ideas to Life</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-3 mb-3">
          <div class="card mb-2  border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-12">
                  <PiNotification className="icon icon1" />
                </div>
                <div className="col-10 mt-4 ">
                  <p className="grow">Grow Your Business</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div class="card mb-2 p-1 border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-3">
                  <TfiReload className="icon icon2" />
                </div>
                <div className="col-10 mt-4 ">
                  <p className="grow">Product Build</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div class="card mb-2 p-1 border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-3">
                  <AiTwotoneMail className="icon icon3" />
                </div>
                <div className="col-10 mt-4 ">
                  <p className="grow">Success Every Day</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div class="card mb-2 p-1 border border-0 bg-light">
            <div class="card-body">
              <div className="row">
                <div className="col-3">
                  <MdTv className="icon icon4" />
                </div>
                <div className="col-10 mt-4 ">
                  <p className="grow">Bring Ideas to Life</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, unde!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
