function Customers() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <h1 className="text-center mb-5 fontFamily">
                What Says Our Customers
              </h1>
              <div className="col-sm-5 text-light rounded-3 p-5 mx-auto mb-4  bgcolor">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  sed dolorem quasi aut cum consequuntur perspiciatis cupiditate
                  nobis dolore. Hic enim facilis ratione repudiandae asperiores
                  veniam quae dolore ut architecto?
                </p>
              </div>

              <div className="col-sm-5 text-light p-5 rounded-3 mx-auto mb-4 bgcolor">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error commodi adipisci obcaecati ratione aliquam non fuga
                  dolorum provident sed ut in quis, vel odio hic nostrum,
                  placeat magni neque mollitia!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-11 mx-auto">
                <div className="row">
                  <div className="col-sm-6 a">
                    {" "}
                    <img
                      src="/client2.jpg"
                      class="rounded-circle img-fluid  border border-4 border-warning"
                      alt="..."
                      style={{ height: "130px" }}
                    ></img>
                  </div>
                  <div className="col-sm-6 a ">
                    <img
                      src="/client2.jpg"
                      class="rounded-circle img-fluid border border-4 border-warning ms-5"
                      alt="..."
                      style={{ height: "130px" }}
                    ></img>
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
export default Customers;
