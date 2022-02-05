// import React, { useState } from "react";
import ProfileAbout from "./ProfileAbout";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";

function ProfileWrapper() {
  // const [users, setusers] = useState([]);
  return (
    <>
      <div className="flex justify-center  md:mx-auto m-0 p-0 box-border">
        <div className="">
          <ProfileHeader />

          <ProfileAbout />

          <ProfileContent />
        </div>
      </div>
    </>
  );
}

export default ProfileWrapper;
