import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments, deleteComment }) {
  return (
    <div className="">
      {comments.map((item) => (
        <CommentItem
          key={item.id}
          comment={item}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
}

export default CommentList;
