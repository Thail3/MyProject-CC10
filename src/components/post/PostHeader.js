import defaultImg from "../../assets/images/profileImg.png";
import timeSince from "../../services/timeSince";
import React, { useState, useRef, useContext } from "react";
import { Modal } from "bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function PostHeader({
  posts,
  // : {
  //   User: { firstName, lastName, profileImg },
  //   title,
  //   createdAt,
  //   id,
  // },
  DeletePost,
  updatePost,
}) {
  const [modal, setModal] = useState(null);
  const [img, setImg] = useState("");
  const [editTitle, seteditTitle] = useState(posts.title);
  const { user } = useContext(AuthContext);

  const handleclickDeletePost = (e) => {
    e.preventDefault();
    console.log(posts.id);
    DeletePost(posts.id);
  };

  const newmodalEl = useRef();
  const imgInputEl = useRef();

  console.log(posts, "postHeader-post");
  console.log(user, "postHeader-user");

  const handleClickEdit = () => {
    const modalobj = new Modal(newmodalEl.current);
    setModal(modalobj);
    modalobj.show();
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await updatePost(editTitle, img, posts.id);
    modal.hide();
    setImg("");
    seteditTitle("");
    imgInputEl.current.value = null;
  };
  return (
    <>
      <div className="d-flex justify-content-between py-2 px-3">
        <div className="d-flex flex-row align-items-center">
          <Link to={`/profile/${posts.User.id}`}>
            <img
              src={posts.User.profileImg ?? defaultImg}
              className="rounded-full  "
              style={{ width: "50px", height: "50px" }}
              alt="user"
              role="button"
            />
          </Link>
          <div className="d-flex flex-column ms-2"></div>
          <span className="fw-bold text-facebook ml-2">
            {posts.User.firstName} {posts.User.lastName}
            <small className="text-muted fs-7 fw-light pl-3">
              {timeSince(posts.createdAt)}
            </small>
          </span>
        </div>
        <div className="mt-1 text-muted">
          <div className="dropdown">
            <button
              className="btn text-muted"
              data-bs-toggle="dropdown"
              disabled
            ></button>
            {posts.User.id === user.id ? (
              <button className="btn text-muted" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
              </button>
            ) : (
              <></>
            )}
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={handleClickEdit}>
                  <i className="bi bi-pencil-square "></i>
                  <span className="pl-2">Edit</span>
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={handleclickDeletePost}
                >
                  <i className="bi bi-trash "></i>
                  <span className="pl-2">Delete</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="modal" ref={newmodalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Post</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => {
                  setImg("");
                  seteditTitle("");
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
                    value={editTitle}
                    onChange={(e) => seteditTitle(e.target.value)}
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

export default PostHeader;
