import React, { useContext, useEffect, useRef, useState } from "react";
import defaultImg from "../../assets/images/profileImg.png";
import { AuthContext } from "../../contexts/AuthContext";

function CommentForm({ createComment }) {
  //*createComment
  const [title, setTitle] = useState("");
  //*ไปเอารูปมาจาก user
  const { user } = useContext(AuthContext);

  const inputEl = useRef();

  //*จะทำการ focus เมื่อทำการกดปุ่ม comment
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    createComment(title);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="position-relative d-flex align-items-center pr-2">
        <img
          src={user.profileImg ?? defaultImg}
          width="50"
          height="30"
          className="rounded-circle me-2"
          alt="user"
        />
        <input
          type="text"
          className="form-control rounded-pill d-inline "
          placeholder="Write something ..."
          ref={inputEl}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </form>
  );
}

export default CommentForm;
