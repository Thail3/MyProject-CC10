// import React, { useState } from "react";
import { useEffect, useState } from "react";
// import ProfileAbout from "./ProfileAbout";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

function ProfileWrapper() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [profilePost, setProfilePost] = useState([]);

  // console.log(posts[0].about);
  console.log(profilePost);
  //
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

  console.log(person);
  console.log(posts);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`/users/${id}`);
      setPerson(res.data.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchMyPost = async () => {
    try {
      const res = await axios.get(`/posts/${id}`);
      setProfilePost(res.data.myPost);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMyPost();
    fetchUser();
  }, [id]);

  return (
    <>
      <div className="m-auto flex justify-center  md:mx-auto p-0 box-border col-lg-6 ">
        <div className="">
          <ProfileHeader posts={posts} person={person} />

          {/* <ProfileAbout posts={posts} /> */}

          {/* <ProfileAbout /> */}

          <ProfileContent posts={profilePost} person={person} />
        </div>
      </div>
    </>
  );
}

export default ProfileWrapper;
