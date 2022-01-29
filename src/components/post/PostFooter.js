import React, { useState } from "react";
import CommentList from "./CommentList";
import PostAction from "./PostAction";
import CommentForm from "./CommentForm";
import axios from "../../config/axios";

function PostFooter({ post: { Comments, id } }) {
  const [comments, setComments] = useState(Comments);
  // const [likes, setLikes] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleShowComment = () => {
    setShowComment((prev) => !prev);
  };

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };
  //*function สร้างคอมเมนท์
  const createComment = async (title) => {
    try {
      const res = await axios.post("/comments", { title, postId: id });
      setComments((prev) => [...prev, res.data.comment]);
      toggleShowForm();
      setShowComment(true);
    } catch (e) {
      console.log(e);
    }
  };
  //*function สร้างไลค์
  // const createLike = async (id) => {
  //   try {
  //     const res = await axios.post("/likes", { id, postId: id });
  //     setLikes()
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div className="p-2 ml-20">
      <PostAction
        numComment={comments.length}
        toggleShowComment={toggleShowComment}
        toggleShowForm={toggleShowForm}
      />
      {showComment && <CommentList comments={comments} />}
      {showForm && <CommentForm createComment={createComment} />}
    </div>
  );
}

export default PostFooter;
