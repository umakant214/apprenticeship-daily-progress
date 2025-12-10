import { FaShoppingCart } from "react-icons/fa";
function Hero() {
  return (
    <>
      <div className="container-fluid">
        <div className="row  p-5 ">
          <div className="col-sm-12  mx-auto">
            <div className="row gap-3 ">
              <div className="p-3 mx-auto bgcolor rounded-3  col-sm-5 text-light ">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="/h1.jpg"
                      className="rounded-circle img-thumbnail bg-warning"
                      alt="..."
                    ></img>
                  </div>
                  <div className="col-6 pt-4">
                    <h3 className="fontFamily">Tasty Thursday</h3>
                    <h1 className="mb-3 fontFamily ">
                      20% <sub>off</sub>
                    </h1>
                    <button className="btn btn-warning text-light px-3 p-2 rounded-5">
                      Order Now <FaShoppingCart className="fs-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 mx-auto bgcolor rounded-3 col-sm-5 text-light">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="/h2.jpg"
                      className="rounded-circle img-thumbnail bg-warning"
                      alt="..."
                    ></img>
                  </div>
                  <div className="col-6 pt-4">
                    <h3 className="fontFamily">Pizza Days</h3>
                    <h1 className="mb-3 fontFamily">
                      15% <sub>off</sub>
                    </h1>
                    <button className="btn btn-warning text-light px-3 p-2 rounded-5">
                      Order Now <FaShoppingCart className="fs-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
