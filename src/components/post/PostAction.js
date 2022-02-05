import React from "react";

function PostAction({
  numComment,
  toggleShowForm,
  toggleShowComment,
  numLikes,
  pushLikes,
  likePost,
  unlikePost,
}) {
  return (
    <>
      <div className=" pr-2">
        <hr className="" />
        <div className="d-flex justify-content-between align-items-center flex-grow-1 mt-2 mb-2">
          <div className="text-center flex-grow-1  ">
            {pushLikes ? (
              <i
                className="bi bi-suit-heart-fill text-blue-400"
                role="button"
                onClick={unlikePost}
              ></i>
            ) : (
              <i
                className="bi bi-suit-heart-fill hover:text-blue-400 transition text-gray-500"
                role="button"
                onClick={likePost}
              ></i>
            )}

            <small className="ms-2 fs-6 text-muted">{numLikes} Like</small>
          </div>
          <div
            className="text-center flex-grow-1 "
            role="button"
            onClick={toggleShowComment}
          >
            <i
              className={`bi bi-chat-text-fill text-gray-500 hover:text-blue-400 transition`}
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
