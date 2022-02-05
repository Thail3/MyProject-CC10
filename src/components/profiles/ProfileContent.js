import React from "react";
import ProfileAction from "./ProfileAction";
import ProfileComment from "./ProfileComment";

function ProfileContent() {
  return (
    <>
      <div class="p-3">
        <ProfileComment />

        {/* <div class="flex flex-1 rounded-lg border ml-14 mt-3 cursor-pointer">
          <div class="flex justify-center items-center py-8 px-12 bg-gray-100 border-r">
            <i class="fas fa-newspaper text-3xl text-gray-500"></i>
          </div>

          <div class="flex-1 flex flex-col justify-center py-8 pr-16 pl-4">
            <p>Joshua Welford</p>
            <p class="text-gray-500">Joshua Welford</p>
          </div>
        </div> */}

        <ProfileAction />
      </div>
    </>
  );
}

export default ProfileContent;
