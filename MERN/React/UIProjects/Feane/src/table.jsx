function Table() {
  return (
    <>
      <div className="container-fluid mt-5  bg-light">
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <h2 className="mb-4 fontFamily">Book A Table</h2>
            <div className="row">
              <div className="col-sm-6 py-4">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Name"
                ></input>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Your Phone Number"
                ></input>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Your Email"
                ></input>
                <select className="form-control mb-3" name="" id="">
                  <option value="">How Many Person ?</option>
                  <option value="">1 </option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                </select>

                <input
                  type="date"
                  className="form-control mb-3"
                  placeholder="dd-mm-yyyy"
                ></input>

                <button className="btn btn-warning  p-2 px-5 text-light rounded-5">
                  BOOK NOW
                </button>
              </div>
              <div className="col-sm-6 py-4">
                <iframe
                  className="img-fluid"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7114.274355926084!2d80.9479737390745!3d26.930865321914617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995707fad72b31%3A0x46173175309a2075!2sMadiyaon%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1765277872388!5m2!1sen!2sin"
                  width="600"
                  style={{ border: 0, height: "300px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;
