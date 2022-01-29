import React from "react";

function HomePage() {
  return (
    <>
      <div className="md:container md:mx-auto m-0 p-0 box-border">
        <hearder className="flex justify-between px-3 pt-3">
          <div>
            <botton>
              <a href="/" className="">
                <i className="bi bi-house text-3xl"></i>
              </a>
            </botton>
          </div>
          <p>HOMECLUB</p>
          <div className="" role="button">
            <img
              src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              width="40"
              className="rounded-circle"
              alt="user"
            />
          </div>
        </hearder>

        <div className="col-lg-6 col-md-9 m-auto mt-3 ">
          <div className="mb-3">
            <div className="p-3">
              <div className="position-relative d-flex align-items-center">
                <img
                  src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  width="50"
                  height="50"
                  className="rounded-circle me-2"
                  alt="user"
                />
                <input
                  type="text"
                  className="form-control rounded-pill d-inline"
                  placeholder="What's on your mind?"
                />
                <div
                  className="position-absolute"
                  style={{
                    top: "50%",
                    right: 13,
                    transform: "translateY(-50%)",
                  }}
                >
                  <i className="fa fa-camera text-muted"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card col-lg-6 col-md-9 m-auto mt-3">
          <div className="d-flex justify-content-between py-2 px-3">
            <div className="d-flex flex-row align-items-center">
              <img
                src="https://i.imgur.com/pBcut2e.jpeg"
                width="50"
                className="rounded-circle"
                alt="user"
                role="button"
              />
              <div className="d-flex flex-column ms-2"></div>
              <span className="fw-bold text-facebook ml-2" role="button">
                John Doe
                <small className="text-muted fs-7 fw-light pl-3">
                  Today at 11.33
                </small>
              </span>
            </div>
            <div className="mt-1 text-muted">
              <div className="dropdown">
                <button className="btn text-muted" data-bs-toggle="dropdown">
                  <i class="bi bi-trash"></i>
                </button>
                <button className="btn text-muted" data-bs-toggle="dropdown">
                  <i class="bi bi-pencil-square"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Edit
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-justify pl-20 mr-2">
            Our key visual. Does not really convey the look of the game, but
            rather the atmosphere.
          </p>
          <img
            className="img-fluid ml-20 mr-2 rounded-lg "
            src="https://i.imgur.com/4qPVarB.png"
            alt="user"
          />
          <div className="p-2 ml-20">
            <hr className="" />
            <div className="d-flex justify-content-between align-items-center flex-grow-1">
              <div className="text-center flex-grow-1 text-facebook">
                <i class="bi bi-heart"></i>
                <small className="ms-2 fs-6">6 Like</small>
              </div>
              <div className="text-center flex-grow-1">
                <i class="bi bi-chat-square-text"></i>
                <small className="ms-2 fs-6 text-muted">10 Comment</small>
              </div>
            </div>
            <hr className="" />
            <div>
              <div className="d-flex flex-row mb-3">
                <img
                  src="https://i.imgur.com/9AZ2QX1.jpg"
                  width="50"
                  height="30"
                  className="rounded-circle"
                  alt="user"
                />
                <div className="d-flex flex-column ms-2">
                  <div>
                    <span className="fw-bold text-facebook">Sarah Jane</span>
                    <span className="ms-2 text-muted fw-bolder">&bull;</span>
                    <span className="ms-2 text-muted fs-7">4 hours ago</span>
                  </div>
                  <span>I like this alot! thanks alot</span>
                </div>
              </div>
              <div className="d-flex flex-row mb-3">
                <img
                  src="https://images.pexels.com/photos/751235/pexels-photo-751235.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  width="50"
                  height="30"
                  className="rounded-circle"
                  alt="user"
                />
                <div className="d-flex flex-column ms-2">
                  <div>
                    <span className="fw-bold text-facebook">
                      Elizabeth Taylor
                    </span>
                    <span className="ms-2 text-muted fw-bolder">&bull;</span>
                    <span className="ms-2 text-muted fs-7">3 days ago</span>
                  </div>
                  <span>Thanks for sharing!</span>
                </div>
              </div>
              <div className="position-relative d-flex align-items-center">
                <img
                  src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  width="50"
                  height="30"
                  className="rounded-circle me-2"
                  alt="user"
                />
                <input
                  type="text"
                  className="form-control rounded-pill d-inline"
                  placeholder="Write something ..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Post</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-5">
                  <textarea
                    className="form-control mb-3"
                    rows="3"
                    placeholder="What's on your mind?"
                  />

                  <div className="input-group mt-3">
                    <input type="file" className="form-control" />
                    <button className="btn btn-outline-danger" type="button">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="d-grid">
                  <button type="button" className="btn btn-primary">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
