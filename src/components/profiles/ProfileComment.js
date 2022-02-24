import React from "react";
import timeSince from "../../services/timeSince";

function ProfileComment({ posts }) {
  return (
    <>
      <div className="flex mt-2  ">
        <div>
          <img className="w-16 rounded-full" src="" alt="" />
        </div>

        <div className="ml-4 ">
          <p>
            <span className="font-bold">
              {posts.User.firstName} {posts.User.lastName}
            </span>{" "}
            <span className="text-gray-500">
              {" "}
              · {timeSince(posts.createdAt)}
            </span>
          </p>
          <div className="sm:h-100">
            <p className="mb-2">{posts.title}</p>
            {posts.img ? (
              <div className=" ">
                <img
                  className="rounded-3 "
                  style={{
                    // height: "500px",
                    objectFit: "contain",
                  }}
                  src={posts.img}
                  alt="pic"
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileComment;
