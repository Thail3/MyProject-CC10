import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

function PostCard({ post }) {
  return (
    <div>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostFooter post={post} />
    </div>
  );
}

export default PostCard;
