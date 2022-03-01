import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import PostForm from "./PostForm";
import PostList from "./PostList";
import Spinner from "../utils/Spinner";

function PostWrapper({ filteredResults, searchItems }) {
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
  //*สามารถอัพเดทโพสได้
  const updatePost = async (title, img, id) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("img", img);
    // console.log(formData);
    try {
      const idx = posts.findIndex((item) => item.id === id);
      const newPost = [...posts];
      const res = await axios.patch(`/posts/${id}`, formData);
      newPost[idx] = res.data.updatedPost;
      setPosts(newPost);
    } catch (e) {
      console.log(e);
    }
  };
  //*สามารถลบโพสได้
  const DeletePost = async (id) => {
    try {
      await axios.delete(`/posts/${id}`);
      const newpost = posts.filter((item) => item.id !== id);
      setPosts(newpost);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <PostForm createPost={createPost} posts={posts} />;
      <PostList
        posts={posts}
        fetchPost={fetchPost}
        DeletePost={DeletePost}
        updatePost={updatePost}
      />
    </>
  );
}

export default PostWrapper;
