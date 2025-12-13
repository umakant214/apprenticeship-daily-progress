import { TbCurrencyDollar } from "react-icons/tb";
import { MdOutlineDone } from "react-icons/md";
import { PiNotificationBold } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import { AiTwotoneMail } from "react-icons/ai";
import { MdTv } from "react-icons/md";
const Pricing = () => {
  return (
    <>
      <div className="row bg-light py-5">
        <div className="col-sm-12">
          <div className="row mb-5">
            <h2 className="text-center">Pricing</h2>
            <p className="text-center">
              Pricing for everyone. Choose your plan now!
            </p>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-3">
              <div class="card border border-0 rounded-5 py-5 p-3">
                <div class="card-body text-center">
                  <p className="text-center free">Free</p>
                  <p
                    className="text-center free fs-1"
                    style={{ color: "#6fe7dd" }}
                  >
                    {/* <TbCurrencyDollar /> 0 */}0
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    There live the blinds texts new
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    Far far away behind the word
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    Far from the countries Vokalia.
                  </p>
                  <button className="btn btn-outline-info px-4 rounded-5 ms-5 mt-4 ">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div class="card text-center border border-0 rounded-5 py-5 p-3">
                <div class="card-body">
                  <p className="text-center free">Standard</p>
                  <p
                    className="text-center free fs-1"
                    style={{ color: "#6fe7dd" }}
                  >
                    {/* <TbCurrencyDollar /> 0 */}$19.99
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    There live the blinds texts new
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    Far far away behinds the word
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    Far from the countries Vokalia.
                  </p>
                  <button className="btn bgcolor text-light py-2 px-4 rounded-5 ms-5 mt-4 ">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-3">
              <div class="card text-center border border-0 rounded-5 py-5 p-3">
                <div class="card-body">
                  <p className="text-center free">Premium</p>
                  <p
                    className="text-center free fs-1"
                    style={{ color: "#6fe7dd" }}
                  >
                    {/* <TbCurrencyDollar /> 0 */}$79.99
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    There live the blinds texts new.
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    Far far away behinds the word
                  </p>
                  <p>
                    <MdOutlineDone className="me-2 fs-4 text-color" />
                    Far from the countries Vokalia.
                  </p>
                  <button className="btn btn-outline-info  py-2 px-4 rounded-5 ms-5 mt-4 ">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12">
          <div className="row text-center">
            <h1>Advantage of using our products</h1>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div class="card mb-2 p-2 py-3 border border-0 bg-light">
                <div class="card-body">
                  <div className="row">
                    <div className="col-2">
                      <PiNotificationBold className="icon icon1" />
                    </div>
                    <div className="col-10 ">
                      <p className="grow">Grow Your Business</p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur, unde!
                      </p>
                      <p className="text-color">Learn More</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div class="card mb-2 p-2 py-3 border border-0 bg-light">
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
                      <p className="text-color">Learn More</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div class="card mb-2 p-2 py-5 border border-0 bg-light">
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
            </div>
            <div className="col-sm-6">
              <div class="card mb-2 p-2 py-5 border border-0 bg-light">
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
        </div>
      </div>
    </>
  );
};

export default Pricing;
