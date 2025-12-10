function About() {
  return (
    <>
      <div className="container-fluid bgcolor mt-5">
        <div className="row">
          <div className="col-sm-11 mx-auto  text-light">
            <div className="row p-5">
              <div className="col-sm-6">
                <img
                  src="/about-img.png"
                  className="img-fluid"
                  style={{ height: "500px" }}
                  alt=""
                />
              </div>
              <div className="col-sm-6 py-5">
                <h1 className="fontFamily mt-5">We Are Feane</h1>

                <p className="mt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <button className="btn btn-warning text-light px-5 py-2 rounded-5">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
