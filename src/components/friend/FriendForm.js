import React from "react";
import FriendAction from "./FriendAction";

function FriendForm() {
  return (
    <div class="max-w-xl mt-3 ml-3 ">
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-1">
        <div class="flex justify-end px-4 pt-4"></div>
        <div class="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg "
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
            role="button"
          />

          <span class="text-sm text-gray-500 dark:text-gray-400 font-bold">
            Jury Pear
          </span>
          <FriendAction />
        </div>
      </div>
    </div>
  );
}

export default FriendForm;
