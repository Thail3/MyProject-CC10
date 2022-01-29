import React from "react";

import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <>
      <div className="card col-lg-6 col-md-9 m-auto ">
        {posts.map((item) => (
          <PostCard key={item.id} post={item} />
        ))}
      </div>
    </>
  );
}

export default PostList;
