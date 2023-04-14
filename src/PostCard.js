import React from 'react';

function PostCard({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Posted by {post.author} on {new Date(post.date).toLocaleDateString()}</p>
    </div>
  );
}

export default PostCard;
