function Collection() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 mx-auto  text-center p-4">
            <h2 className="text-color">Tanishq Collections</h2>
            <hr className="mx-auto w-50" />
            <p style={{ color: "gray" }}>
              Explore our newly launched collection
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-6 mb-3">
            <img
              src="images/collection1.webp"
              className="img-fluid rounded-4"
              alt=""
            />
          </div>
          <div className="col-sm-6 ">
            <div className="row a" style={{ height: "350px" }}>
              <img
                src="images/collection2.webp"
                className="img-fluid  rounded-4"
                alt=""
              />
            </div>
            <div className="row a " style={{ height: "350px" }}>
              <img
                src="images/collection3.webp"
                className="img-fluid  rounded-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Collection;
