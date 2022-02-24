import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments, deleteComment, updateComment }) {
  return (
    <div className="">
      {comments.map((item) => (
        <CommentItem
          key={item.id}
          comment={item}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      ))}
    </div>
  );
}

export default CommentList;
