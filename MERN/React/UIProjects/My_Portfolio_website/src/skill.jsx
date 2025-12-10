function Skill() {
  return (
    <>
      <div className="row mb-2 skill">
        <div className="col-sm-11 mx-auto">
          <div className="row">
            <div className="col-sm-4 mb-2">
              <div className="card p-1 shadow-lg">
                <div className="card-body">
                  <h3 className="mb-4">
                    <i className="fa-solid fa-boxes-stacked"></i> Frontend
                  </h3>
                  <button className="btn btn-secondary mb-2">Html5</button>
                  <button className="btn btn-secondary mb-2">CSS3</button>
                  <button className="btn btn-secondary mb-2">Bootstrap5</button>
                  <button className="btn btn-secondary mb-2">
                    Tailwind css
                  </button>
                  <button className="btn btn-secondary mb-2">
                    Responsive Design
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-2">
              <div className="card p-1 shadow-lg">
                <div className="card-body">
                  <h3 className="mb-4">
                    <i className="fa-solid fa-boxes-stacked"></i> Backend
                  </h3>
                  <button className="btn btn-secondary mb-2">
                    Restful Api
                  </button>
                  <button className="btn btn-secondary mb-2">
                    Authentication
                  </button>
                  <button className="btn btn-secondary mb-2">
                    Authorization
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-2">
              <div className="card shadow-lg p-1">
                <div className="card-body">
                  <h3 className="mb-4">
                    <i className="fa-solid fa-boxes-stacked"></i> Database
                  </h3>
                  <button className="btn btn-secondary mb-2">MongoDB</button>
                  <button className="btn btn-secondary mb-2">MySQL</button>
                  <button className="btn btn-secondary mb-2">
                    Database Design
                  </button>
                  <button className="btn btn-secondary mb-2">
                    CRUD Operation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3 skill">
        <div className="col-sm-11 mx-auto">
          <div className="row">
            <div className="col-sm-4 p-1 mb-2">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h3 className="mb-4">
                    <i className="fa-solid fa-boxes-stacked"></i> Programming
                  </h3>
                  <button className="btn btn-secondary mb-2">Javascript</button>
                  <button className="btn btn-secondary mb-2">ES6+</button>
                  <button className="btn btn-secondary mb-2 px-2">
                    C Language
                  </button>
                  <button className="btn btn-secondary mb-2">Java</button>
                  <button className="btn btn-secondary mb-2">
                    Object Oriented Programming
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mb-2">
              <div className="card p-1 shadow-lg">
                <div className="card-body">
                  <h3 className="mb-4">
                    <i className="fa-solid fa-boxes-stacked"></i> Tools
                  </h3>
                  <button className="btn btn-secondary mb-2">Git</button>
                  <button className="btn btn-secondary mb-2">Github</button>
                  <button className="btn btn-secondary mb-2">VS Code</button>
                  <button className="btn btn-secondary mb-2">Postman</button>
                  <button className="btn btn-secondary mb-2">Netlify</button>
                  <button className="btn btn-secondary mb-2">Vercel</button>
                  <button className="btn btn-secondary mb-2">Render</button>
                  <button className="btn btn-secondary mb-2">Canva</button>
                </div>
              </div>
            </div>

            <div className="col-sm-4 p-2 mb-2">
              <div className="card shadow-lg p-1">
                <div className="card-body">
                  <h3 className="mb-3">
                    <i className="fa-solid fa-boxes-stacked"></i> Other
                  </h3>
                  <button className="btn btn-secondary mb-2">
                    Problem Solving
                  </button>
                  <button className="btn btn-secondary mb-2">
                    Team Collaboration
                  </button>
                  <button className="btn btn-secondary mb-2">
                    Agile Methodology
                  </button>
                  <button className="btn btn-secondary mb-2">
                    Time Management
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3 mt-5" id="project">
        <div class="col-sm-8 mx-auto text-center">
          <h2 class="first-color fw-bold">Projects</h2>
          <hr class="w-50 mx-auto line mb-3" />
          <p>Here are some of the Projects live work on.</p>
        </div>
      </div>
    </>
  );
}
export default Skill;
