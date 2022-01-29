import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <div className="">
      {comments.map((item) => (
        <CommentItem key={item.id} comment={item} />
      ))}
    </div>
  );
}

export default CommentList;
