import { IoIosArrowForward } from "react-icons/io";
const Hero = () => {
  return (
    <>
      <div className="row py-5">
        <div className="col-10 mx-auto">
          <div className="row">
            <div
              className="col-sm-6    align-items-center"
              style={{ marginTop: "50px" }}
            >
              <div className="heroHeading">You're Using Free Lite Version</div>
              <p className="heroPara">
                Please purchase full version of the template to get all sections
                and permission to use with commercial projects.
              </p>
              <button className="btn btnbgcolor">
                Get Started <IoIosArrowForward className="fs-5 ms-2" />
              </button>
            </div>
            <div className="col-sm-6 p-5">
              <img src="/hero-img.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
