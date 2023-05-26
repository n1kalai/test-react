import React, { useState } from 'react';
import { fetchCommentsById } from '../../api/comments';

const PostContainer = (props) => {
  const [comments, setComments] = useState([]);
  const post = props.post;

  const fetchComments = async () => {
    const data = await fetchCommentsById(post.id);
    setComments(data);
  };

  return (
    <article className="post-container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={fetchComments}>See comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h5>{comment.body}</h5>
        </div>
      ))}
    </article>
  );
};

export default PostContainer;
