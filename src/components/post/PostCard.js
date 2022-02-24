import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

function PostCard({ posts, fetchPost, DeletePost, updatePost }) {
  console.log(posts);
  return (
    <>
      <div className="card col-lg-6 col-md-9 m-auto mt-3">
        <PostHeader
          posts={posts}
          DeletePost={DeletePost}
          updatePost={updatePost}
        />
        <PostContent posts={posts} />
        <PostFooter posts={posts} fetchPost={fetchPost} />
      </div>
    </>
  );
}

export default PostCard;
