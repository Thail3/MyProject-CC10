import React from "react";

function PostContent({ post: { title, img } }) {
  return (
    <div>
      {title && <p className="text-justify pl-20 mr-2">{title}</p>}
      {img && (
        <div className="pl-20 pr-2 mt-3 mb-3">
          <img className="img-fluid rounded-lg " src={img} alt="post-img" />
        </div>
      )}
    </div>
  );
}

export default PostContent;
