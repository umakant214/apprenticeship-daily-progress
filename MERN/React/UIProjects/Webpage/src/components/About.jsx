import { MdOutlineDone } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="row py-5">
        <div className="col-sm-7">
          <img src="/about.svg" className="img-fluid" alt="" />
        </div>
        <div className="col-sm-5">
          <p className="text-color text-uppercase">About</p>
          <h1>About Us</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia.
          </p>
          <p>
            <MdOutlineDone className="fs-5 me-2 text-color" />
            There live the blind texts
          </p>

          <p>
            <MdOutlineDone className="fs-5 me-2 text-color" />
            There live the blind texts
          </p>

          <p>
            <MdOutlineDone className="fs-5 me-2 text-color" />
            There live the blind texts
          </p>

          <p>
            <MdOutlineDone className="fs-5 me-2 text-color" />
            There live the blind texts
          </p>
          <div className="row">
            <div className="col-6">
              <h1>59M</h1>
              <p>Members</p>
            </div>
            <div className="col-6">
              <h1>14</h1>
              <p>Team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="row text-center">
            <h1>Our News</h1>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>

          <div className="row mt-4">
            {/*  */}
            <div className="col-sm-4">
              <div class="card p-4 border-0 shadow-sm">
                <div class="card-body">
                  <div className="row mb-4">
                    <div className="col-4">
                      <img
                        src="/person_1.webp"
                        class="rounded-circle img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <h5>Posted by James</h5>
                      <p>Jun 14, 2020</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Digital Service, 4 min read</p>
                    <h4>
                      Far far away behind the word mountains far from the
                      countries
                    </h4>
                    <div className="col-12">
                      {" "}
                      <FaLongArrowAltRight className="fs-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-sm-4">
              <div class="card p-4 border-0 shadow-sm">
                <div class="card-body">
                  <div className="row mb-4">
                    <div className="col-4">
                      <img
                        src="/person_2.webp"
                        class="rounded-circle img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <h5>Posted by James</h5>
                      <p>Jun 14, 2020</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Digital Service, 4 min read</p>
                    <h4>
                      Far far away behind the word mountains far from the
                      countries
                    </h4>
                    <div className="col-12">
                      {" "}
                      <FaLongArrowAltRight className="fs-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div class="card p-4 border-0 shadow-sm">
                <div class="card-body">
                  <div className="row mb-4">
                    <div className="col-4">
                      <img
                        src="/person_3.webp"
                        class="rounded-circle img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <h5>Posted by James</h5>
                      <p>Jun 14, 2020</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>Digital Service, 4 min read</p>
                    <h4>
                      Far far away behind the word mountains far from the
                      countries
                    </h4>
                    <div className="col-12">
                      {" "}
                      <FaLongArrowAltRight className="fs-3" />
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

export default About;
