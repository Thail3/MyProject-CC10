import React from "react";

import PostCard from "./PostCard";

function PostList({ posts, fetchPost, DeletePost, updatePost }) {
  return (
    <>
      <div>
        {posts.map((item) => (
          <PostCard
            key={item.id}
            post={item}
            fetchPost={fetchPost}
            DeletePost={DeletePost}
            updatePost={updatePost}
          />
        ))}
      </div>
    </>
  );
}

export default PostList;
