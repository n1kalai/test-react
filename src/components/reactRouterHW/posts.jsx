import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainPageDiv } from "./mainPage";
import styled from "styled-components";

const MainCommentDiv = styled.div`
  background-color: rgba(63, 94, 251, 0.1);
  padding: 0 20px;

  & h2 {
    font-size: 34px;
    font-weight: bold;

    border-bottom: 3px solid red;
    width: 20%;
  }
`;

const CommentDiv = styled.div`
  border-bottom: 3px solid green;

  & h3 {
    font-size: 20px;
    color: rgba(63, 94, 251, 0.8);
  }
`;

const Commbutton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  background-color: green;
  border: 3px solid white;
  border-radius: 8px;
  color: white;

  &:hover {
    background-color: white;
    color: green;
    border: 3px solid green;
  }
`;

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
    <MainPageDiv className="post-section">
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>

      {comments.length > 0 ? (
        <MainCommentDiv className="comment-section">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <CommentDiv key={comment.id}>
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </CommentDiv>
          ))}
        </MainCommentDiv>
      ) : (
        <p>No comments.</p>
      )}

      <Commbutton onClick={handleNavigateBack}>Back</Commbutton>
    </MainPageDiv>
  );
};

export default Post;
