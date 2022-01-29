import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import PostForm from "./PostForm";
import PostList from "./PostList";
import Spinner from "../utils/Spinner";

function PostWrapper() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    try {
      const res = await axios.get("/posts");
      setPosts(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  //*สามารถสร้างโพสได้
  const createPost = async (title, img) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("img", img);
    try {
      setLoading(true);
      await axios.post("/posts", formData);
      fetchPost();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <PostForm createPost={createPost} />;
      <PostList posts={posts} />
    </>
  );
}

export default PostWrapper;
