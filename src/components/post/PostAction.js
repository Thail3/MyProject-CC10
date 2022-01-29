import React from "react";

function PostAction({ numComment, toggleShowForm, toggleShowComment }) {
  return (
    <>
      <div className=" pr-2">
        <hr className="" />
        <div className="d-flex justify-content-between align-items-center flex-grow-1 mt-2 mb-2">
          <div className="text-center flex-grow-1 text-facebook">
            <i className="bi bi-heart " role="button"></i>
            <small className="ms-2 fs-6">6 Like</small>
          </div>
          <div
            className="text-center flex-grow-1"
            role="button"
            onClick={toggleShowComment}
          >
            <i
              className="bi bi-chat-square-text"
              role="button"
              onClick={toggleShowForm}
            ></i>
            <small className="ms-2 fs-6 text-muted">{numComment} Comment</small>
          </div>
        </div>
        <hr className="" />
      </div>
    </>
  );
}

export default PostAction;
