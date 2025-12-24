import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
const About = () => {
  return (
    <>
      <div className="row py-5 aboutbgColor">
        <div className="col-sm-10 mx-auto">
          <div
            className="row"
            style={{ paddingTop: "73px", paddingBottom: "73px" }}
          >
            <div className="col-sm-6 mb-4">
              <h1 className="smHeading mb-4">
                The future of designing starts here
              </h1>
              <p className="mb-4">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed,
              </p>
              <p>
                <IoCheckmarkDoneCircleOutline className="me-2" />
                Stop wasting time and money designing and managing a website
                that doesn’t get results.
              </p>
              <p>
                <IoCheckmarkDoneCircleOutline className="me-2" />
                Stop wasting time and money designing and managing.
              </p>
              <p>
                <IoCheckmarkDoneCircleOutline className="me-2" />
                Stop wasting time and money designing and managing a website
                that doesn’t get results.
              </p>
              <button className="btn btnbgcolor rounded-3">Learn More</button>
            </div>
            <div className="col-sm-6 mb-4">
              <img src="/about-img.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
