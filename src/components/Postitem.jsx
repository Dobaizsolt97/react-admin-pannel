import React from "react";
import "./PostItem.css";
const PostItem = ({ title, body }) => {
  return (
    <div className="post-item">
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
    </div>
  );
};
export default PostItem;
