import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 py-5 p-4">
          <h1 className="mb-5 heading">
            <Typewriter
              options={{
                strings: ["Promote Your Products by Colorlib"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-4 paracolor">
            Another cool free html css template by Colorlib Far far away, behind
            the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove
            right at the coast
          </p>

          <form className="d-flex" role="search">
            <button
              className="btn bgcolor text-light border border-1 me-3 py-3 "
              type="submit"
            >
              SEE FEATURES
            </button>
            <button
              className="btn  text-color  border border-1 bg-light py-3 "
              type="submit"
            >
              PRICING
            </button>
          </form>
        </div>
        <div className="col-sm-6 p-2 py-5">
          <img src="/hero.svg" className="img-fluid" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
