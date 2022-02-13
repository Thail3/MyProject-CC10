import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ProfileAction from "./ProfileAction";
import ProfileComment from "./ProfileComment";

function ProfileContent({ posts }) {
  const { user } = useContext(AuthContext);
  const profilePost = posts.filter((item) => item.userId === user.id);

  return (
    <>
      <div className="p-3">
        {profilePost.map((item) => (
          <ProfileComment key={item.id} posts={item} />
        ))}

        {/* <div className="flex flex-1 rounded-lg border ml-14 mt-3 cursor-pointer">
          <div className="flex justify-center items-center py-8 px-12 bg-gray-100 border-r">
            <i className="fas fa-newspaper text-3xl text-gray-500"></i>
          </div>

          <div className="flex-1 flex flex-col justify-center py-8 pr-16 pl-4">
            <p>Joshua Welford</p>
            <p className="text-gray-500">Joshua Welford</p>
          </div>
        </div> */}

        <ProfileAction />
      </div>
    </>
  );
}

export default ProfileContent;
