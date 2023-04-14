import React, { useState } from 'react';

function NewPostForm({ onNewPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const post = {
      title,
      body,
      author,
      date: new Date().toISOString(),
    };

    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(data => {
        onNewPost(data);
        setTitle('');
        setBody('');
        setAuthor('');
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)} />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={event => setBody(event.target.value)} />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" value={author} onChange={event => setAuthor(event.target.value)} />
      </div>
      <button type="submit">Post</button>
    </form>
  );
}

export default NewPostForm;
