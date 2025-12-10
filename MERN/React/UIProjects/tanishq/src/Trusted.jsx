function Trusted() {
  return (
    <>
      <div className="row">
        <div className="col-sm-4 mx-auto text-center p-4">
          <h2 className="text-color">Exchange Program</h2>
          <hr className="mx-auto w-50" />
          <p style={{ color: "gray" }}>Trusted by 2.8M+ families</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <video src="images/video.mp4" style={{ width: "100%" }}></video>
        </div>
        <span className="text-center px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          earum? Deleniti neque, quas magni et nemo at animi. Voluptate ducimus
          repellendus fugit ex corporis quaerat eos modi nemo delectus harum?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          adipisci, quisquam numquam cumque nisi hic iusto maxime et temporibus
          nihil consectetur tenetur ab saepe minus cum! Omnis voluptas
          repellendus sint.
        </span>
      </div>
      <div className="row">
        <div className="col-sm-4 mx-auto text-center p-4">
          <h2 className="text-color">Curated For You</h2>
          <hr className="mx-auto w-50" />
          <p style={{ color: "gray" }}>Shop By Gender</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mx-auto">
          <div className="row">
            <div className="col-sm-10 mx-auto">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <img
                      src="images/gender1.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Women Jewellery
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <img
                      src="images/gender2.webp"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Men Jewellery</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <img
                      src="images/gender3.webp"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Kids Jewellery</h5>
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
}
export default Trusted;
