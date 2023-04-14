import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import './Dailyforum.css';

function DailyEventsForum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const handleNewPost = post => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <h2>Daily Events Forum</h2>
      <NewPostForm onNewPost={handleNewPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default DailyEventsForum;
