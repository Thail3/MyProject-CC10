// import React, { useState } from "react";
import { useEffect, useState } from "react";
import ProfileAbout from "./ProfileAbout";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";
import axios from "../../config/axios";

function ProfileWrapper() {
  const [posts, setPosts] = useState([]);

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
      <div className="flex justify-center  md:mx-auto m-0 p-0 box-border">
        <div className="">
          <ProfileHeader />

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
