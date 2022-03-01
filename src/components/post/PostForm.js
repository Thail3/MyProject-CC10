import React, { useState, useRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import defaultImg from "../../assets/images/profileImg.png";
import { Modal } from "bootstrap";

function PostForm({ createPost, posts }) {
  const [modal, setModal] = useState(null);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  console.log(posts);

  const modalEl = useRef();

  const imgInputEl = useRef();

  const { user } = useContext(AuthContext);
  console.log(user);

  const handleClickInput = () => {
    const modalobj = new Modal(modalEl.current);
    setModal(modalobj);
    modalobj.show();
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await createPost(title, img);
    modal.hide();
    setImg("");
    setTitle("");
    imgInputEl.current.value = null;
  };

  return (
    <>
      <div className="col-lg-6 col-md-9 m-auto mt-3 ">
        <div className="">
          <div className="p-3">
            <div className="position-relative d-flex align-items-center  ">
              <img
                src={user.profileImg ?? defaultImg}
                style={{ height: "50px", width: "55px" }}
                className="rounded-full "
                alt="user"
              />
              <input
                type="text"
                className="form-control rounded-pill d-inline ml-3"
                placeholder="คุณกำลังคิดอะไรอยู่ . . ."
                onClick={handleClickInput}
              />
              {/* <div
                className="position-absolute"
                style={{
                  top: "50%",
                  right: 13,
                  transform: "translateY(-50%)",
                }}
              >
                <i className="bi bi-camera text-muted"></i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="modal" ref={modalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => {
                  setImg("");
                  setTitle("");
                  imgInputEl.current.value = null;
                }}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitForm}>
                <div className="mb-5">
                  <textarea
                    className="form-control mb-3"
                    rows="3"
                    placeholder="คุณกำลังคิดอะไรอยู่ . . ."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  {img && (
                    <img
                      src={URL.createObjectURL(img)}
                      className="img-fluid"
                      alt="post-img"
                    />
                  )}
                  <div className="input-group mt-3">
                    <input
                      type="file"
                      className="form-control"
                      ref={imgInputEl}
                      onChange={(e) => {
                        if (e.target.files[0]) setImg(e.target.files[0]);
                      }}
                    />
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={() => {
                        imgInputEl.current.value = null;
                        setImg("");
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostForm;
