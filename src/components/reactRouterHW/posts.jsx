import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPostAndComments = async () => {
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`),
      ]);

      const postData = await postResponse.json();
      const commentsData = await commentsResponse.json();

      setPost(postData);
      setComments(commentsData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchPostAndComments();
  }, []);

  const handleNavigateBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="post-section">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>

      {comments.length > 0 ? (
        <div className="comment-section">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No comments.</p>
      )}

      <button onClick={handleNavigateBack}>Back</button>
    </div>
  );
};

export default Post;
