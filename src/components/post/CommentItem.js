import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../assets/images/profileImg.png";
import timeSince from "../../services/timeSince";

function CommentItem({
  comment: {
    User: { profileImg, firstName, lastName },
    createdAt,
    title,
    id,
  },
  deleteComment,
}) {
  const handleDeleteForm = (e) => {
    e.preventDefault();
    deleteComment(id);
  };
  return (
    <div className="row mb-3 mt-3 ">
      <Link to="/profile" className="col-md-1 p-0">
        {/* <button> */}
        <img
          src={profileImg ?? defaultImg}
          width="50"
          height="50"
          className="rounded-circle "
          alt="user"
          role="button"
        />
        {/* </button> */}
      </Link>
      <div className="col-md-11 ">
        <div className="d-flex justify-content-between">
          <div>
            <span className="fw-bold text-facebook">
              {firstName} {lastName}
            </span>
            <span className="ms-2 text-muted fw-bolder">&bull;</span>
            <span className="ms-2 text-muted fs-7">{timeSince(createdAt)}</span>
          </div>

          <div>
            <button className="btn text-muted" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button onClick={handleDeleteForm}>
                  <i className="bi bi-trash ms-auto inline-block "></i>
                  <span className="pl-2">Delete</span>
                </button>
              </li>
              <li>
                <button>
                  <i className="bi bi-pencil-square "></i>
                  <span className="pl-2">Edit</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <span>{title}</span>
      </div>
    </div>
  );
}

export default CommentItem;
