import React from "react";
import timeSince from "../../services/timeSince";

function ProfileComment({ posts }) {
  return (
    <>
      <div className="flex mt-2 ">
        <div>
          <img className="w-16 rounded-full" src="" alt="" />
        </div>

        <div className="ml-4">
          <p>
            <span className="font-bold">
              {posts.User.firstName} {posts.User.lastName}
            </span>{" "}
            <span className="text-gray-500">
              {" "}
              · {timeSince(posts.createdAt)}
            </span>
          </p>

          <p>{posts.title}</p>
          <img className="" src={posts.img} />
        </div>
      </div>
    </>
  );
}

export default ProfileComment;
