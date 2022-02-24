import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import defaultImg from "../../assets/images/profileImg.png";
import timeSince from "../../services/timeSince";
import { AuthContext } from "../../contexts/AuthContext";

function CommentItem({ comment, deleteComment, updateComment }) {
  const [modal, setModal] = useState(null);
  const [editTitle, seteditTitle] = useState(comment.title);
  const { user } = useContext(AuthContext);
  // console.log(comment.User.id);
  console.log(comment);
  console.log(comment.User.id);
  console.log(user);

  const newmodalEl = useRef();

  const handleclickDeletePost = async (e) => {
    e.preventDefault();
    const res = await deleteComment(comment.id);
    // DeletePost(comment.User.id);
  };

  const handleClickEdit = () => {
    const modalobj = new Modal(newmodalEl.current);
    setModal(modalobj);
    modalobj.show();
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await updateComment(editTitle, comment.id);
    modal.hide();
    seteditTitle("");
  };

  return (
    <>
      {" "}
      <div className="row mb-3 mt-3 ">
        <Link to={`/profile/${comment.User.id}`} className="col-md-1 p-0">
          {/* <button> */}
          <img
            src={comment.User.profileImg ?? defaultImg}
            className="rounded-circle w-12 h-12 "
            alt="user"
            role="button"
          />
          {/* </button> */}
        </Link>
        <div className="col-md-11 ">
          <div className="d-flex justify-content-between">
            <div>
              <span className="fw-bold text-facebook">
                {comment.User.firstName} {comment.User.lastName}
              </span>
              <span className="ms-2 text-muted fw-bolder">&bull;</span>
              <span className="ms-2 text-muted fs-7">
                {timeSince(comment.createdAt)}
              </span>
            </div>

            <div>
              {user.id === comment.User.id ? (
                <button className="btn text-muted" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </button>
              ) : (
                <></>
              )}
              <ul className="dropdown-menu p-3">
                <li className="mb-1">
                  <button onClick={handleClickEdit}>
                    <i className="bi bi-pencil-square "></i>
                    <span className="pl-2">Edit</span>
                  </button>
                </li>
                <li>
                  <button onClick={handleclickDeletePost}>
                    <i className="bi bi-trash ms-auto inline-block "></i>
                    <span className="pl-2">Delete</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <span>{comment.title}</span>
        </div>
      </div>
      <div className="modal" ref={newmodalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Post</h5>
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

export default CommentItem;
