// import axios from "../../config/axios";
import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

function ProfileAbout({ posts }) {
  const { captionSub } = useContext(AuthContext);

  return (
    <>
      <div className="ml-4">
        <p className="font-bold text-lg">
          {posts.User.firstName} {posts.User.lastName}
        </p>
      </div>

      <div className="px-3 mt-3">
        <p>{captionSub ? captionSub : posts.User.about}</p>
      </div>
      <div className="flex mt-3 border-b"></div>
    </>
  );
}

export default ProfileAbout;
