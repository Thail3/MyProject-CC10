import React, { useContext, useState } from "react";
import CommentList from "./CommentList";
import PostAction from "./PostAction";
import CommentForm from "./CommentForm";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContext";

function PostFooter({ posts: { Comments, Likes, id }, fetchPost }) {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState(Comments);
  const [likes, setLikes] = useState(Likes);
  const [showComment, setShowComment] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [pushLikes, setPushLikes] = useState(
    Likes.findIndex((item) => item.userId === user.id) !== -1
  );

  const [numLikes, setNumLikes] = useState(likes.length);

  const toggleShowComment = () => {
    setShowComment((prev) => !prev);
  };

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  const likePost = async () => {
    const res = await axios.post("/likes", { postId: id });
    setPushLikes(true);
    setNumLikes((prev) => prev + 1);
    fetchPost();
  };

  const unlikePost = async () => {
    const res = await axios.delete(`/likes/${id}`);
    setPushLikes(false);
    setNumLikes((prev) => prev - 1);
    fetchPost();
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
  //*function ลบคอมเมนท์
  const deleteComment = async (id) => {
    try {
      await axios.delete(`/comments/${id}`);
      const newComment = comments.filter((item) => item.id !== id);
      setComments(newComment);
    } catch (e) {
      console.log(e);
    }
  };
  //*function แก้ไขคอมเมนท์
  const updateComment = async (title, id) => {
    try {
      const idx = comments.findIndex((item) => item.id === id);
      const newComment = [...comments];
      const res = await axios.patch(`/comments/${id}`, { title });
      newComment[idx] = res.data.updateComment;
      setComments(newComment);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="p-2 ml-20">
      <PostAction
        numComment={comments.length}
        numLikes={numLikes}
        toggleShowComment={toggleShowComment}
        toggleShowForm={toggleShowForm}
        pushLikes={pushLikes}
        likePost={likePost}
        unlikePost={unlikePost}
      />
      {showComment && (
        <CommentList
          comments={comments}
          deleteComment={deleteComment}
          updateComment={updateComment}
        />
      )}
      {showForm && <CommentForm createComment={createComment} />}
    </div>
  );
}

export default PostFooter;
