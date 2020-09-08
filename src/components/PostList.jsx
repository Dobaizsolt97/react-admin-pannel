import React from "react";
import PostItem from "./Postitem";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  );
}

export default PostList;
