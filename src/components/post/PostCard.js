import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

function PostCard({ post, fetchPost, DeletePost, updatePost }) {
  return (
    <>
      <div className="card col-lg-6 col-md-9 m-auto mt-3">
        <PostHeader
          post={post}
          DeletePost={DeletePost}
          updatePost={updatePost}
        />
        <PostContent post={post} />
        <PostFooter post={post} fetchPost={fetchPost} />
      </div>
    </>
  );
}

export default PostCard;
