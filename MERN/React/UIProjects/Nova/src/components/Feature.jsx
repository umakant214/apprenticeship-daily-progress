import { FaTimeline } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { HiOutlineChip } from "react-icons/hi";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { CgArrowAlignH } from "react-icons/cg";
const Feature = () => {
  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-sm-10 col-lg-7 mx-auto">
              <div className="text-center smHeading mb-3">Specializing In</div>
              <p className="text-center   featuresPara">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-sm-4 mb-4">
              <div className="card Featurescard py-5 shadow-sm p-5">
                <FaTimeline className="mx-auto icon fs-2" />
                <div className="card-body">
                  <h5 className="card-title">Graphics Design</h5>
                  <p className="card-text text-center featuresPara">
                    Short description for the ones who look for something new.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card Featurescard py-5 shadow-sm p-5">
                <HiOutlineChip className="mx-auto icon fs-2" />
                <div className="card-body">
                  <h5 className="card-title">Print Design</h5>
                  <p className="card-text text-center featuresPara">
                    Short description for the ones who look for something new.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="card Featurescard py-5 shadow-sm p-5">
                <FaChartLine className="mx-auto icon fs-2" />
                <div className="card-body">
                  <h5 className="card-title">Business Analysis</h5>
                  <p className="card-text text-center featuresPara">
                    Short description for the ones who look for something new.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card Featurescard py-5 shadow-sm p-5">
                <FaLaptopCode className="mx-auto icon fs-2" />
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text text-center featuresPara">
                    Short description for the ones who look for something new.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card Featurescard py-5 shadow-sm p-5">
                <MdOutlineLock className="mx-auto icon fs-2" />
                <div className="card-body">
                  <h5 className="card-title">Business Analysis</h5>
                  <p className="card-text text-center featuresPara">
                    Short description for the ones who look for something new.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-4">
              <div className="card Featurescard py-5 shadow-sm p-5">
                <CgArrowAlignH className="mx-auto icon fs-2" />
                <div className="card-body">
                  <h5 className="card-title">Business Analysis</h5>
                  <p className="card-text text-center featuresPara">
                    Short description for the ones who look for something new.
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

export default Feature;
