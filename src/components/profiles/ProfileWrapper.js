// import React, { useState } from "react";
import { useEffect, useState } from "react";
import ProfileAbout from "./ProfileAbout";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";
import axios from "../../config/axios";

function ProfileWrapper() {
  const [posts, setPosts] = useState([]);
  // console.log(posts[0].about);
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

  return (
    <>
      <div className="m-auto flex justify-center  md:mx-auto p-0 box-border col-lg-6 ">
        <div className="">
          <ProfileHeader posts={posts} />

          {posts.map((item) => (
            <ProfileAbout key={item.id} posts={item} />
          ))}

          {/* <ProfileAbout /> */}

          <ProfileContent posts={posts} />
        </div>
      </div>
    </>
  );
}

export default ProfileWrapper;
